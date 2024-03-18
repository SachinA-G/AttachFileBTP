const cds = require('@sap/cds');
const { log } = require('console');


module.exports = cds.service.impl(async function () {

    let {
        company
    } = this.entities;
    const c5re = await cds.connect.to('iflow1');
    var data_recieved = true;
    // For college

    this.before('READ', company, async (req) => {
        if (data_recieved == true) {

            try {
                const resp = await c5re.get('/odata/v4/my/company');
                await DELETE.from(company);
                console.log(resp);//check resp
                const read_api = resp.value;
                // var arr = [];

                // read_api.forEach(element => {
                //     arr.push({
                //         collegeId: resp.value[0].collegeId,
                //         collegeName: resp.value[1].collegeName,
                //         collegeType: resp.value[2].collegeType,
                //         college.col
                //     })
                // });

                await INSERT.into(company).entries(read_api);
                console.log(read_api);
                data_recieved = false;
            } catch (error) {
                console.log(error);
            }
        }
    });

    // delete 

    this.on('DELETE', company, async (req) => {
        "this code delete one by one record from database"
        debugger

        // const dt = req.data;
        // const lv_cm_id = dt.cm_id;
        // let lv_url = "/odata/v4/my/company(cm_id='"+lv_cm_id+"')";
        // dltPromises.push(c4re.delete(lv_url));


        try {
            const dt = req.data;
            const lv_cm_id = dt.cm_id;
            let lv_url = "/odata/v4/my/company(cm_id=" + lv_cm_id + ",IsActiveEntity=true)";
            try {
                const resp = await c5re.get(lv_url);
                await c5re.delete(lv_url);

            }
            catch (error) {
                if (error.statusCode && error.statusCode === 502) {
                    console.log('Record not found with plant:', lv_cm_id);
                    // You can handle this scenario as needed, such as returning a specific error message
                    req.error(502, 'Record not found');  
                }
            }
        }

        catch (error) {
            console.error('Error during Delete operation on Parent entity:', error);
            req.error(500, 'Internal Server Error');
        }
    })


    // inserting into the host link

    this.on('CREATE', company, async (req, next) => {
        debugger
        try {
            const data = req.data;

            const insert_val = {
                cm_id: data.cm_id,
                cm_name: data.cm_name,
                "IsActiveEntity": true
            };

            await c5re.post('/odata/v4/my/company', insert_val);

            return next();
        } catch (error) {

            console.error('Error during CREATE operation on Parent entity:', error);
            req.error(500, 'Internal Server Error');
        }
    });

    // edit 

    // this.on('EDIT', company, async (req) => {
    //     debugger

    // });



    this.on(['UPDATE'], company, async (req) => {
        debugger
        const lv_cm_id = req.data.cm_id;
        try {
            body = {
                cm_id: req.data.cm_id,
                cm_name: req.data.cm_name,
            }
            await UPDATE(company)
                .set(body)
                .where({ cm_id: req.data.cm_id });  //to update in db

            const updateurl = "/odata/v4/my/company(cm_id="+ lv_cm_id+",IsActiveEntity=true)"; //backtick

            debugger

            var res  = await c5re.patch(updateurl, body);  //update in api
            return req.data;
          
        } catch (error) {
            console.log(error);
        }
    })




})





