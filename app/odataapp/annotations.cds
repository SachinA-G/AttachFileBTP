using MyService as service from '../../srv/service';

annotate service.company with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'cm_id',
            Value : cm_id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cm_name',
            Value : cm_name,
        },
    ]
);
annotate service.company with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'cm_id',
                Value : cm_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cm_name',
                Value : cm_name,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
