sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'odataapp/test/integration/FirstJourney',
		'odataapp/test/integration/pages/companyList',
		'odataapp/test/integration/pages/companyObjectPage'
    ],
    function(JourneyRunner, opaJourney, companyList, companyObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('odataapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecompanyList: companyList,
					onThecompanyObjectPage: companyObjectPage
                }
            },
            opaJourney.run
        );
    }
);