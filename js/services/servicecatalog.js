/* ========================================================================== */
// Service Catalog
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'Service Catalog',
    'resourcetypes': {
        'Portfolios': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'providername',
                        title: 'Provider Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Portfolio Principal Associations': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Portfolio ID',
                        field: 'portfolioid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'principalarn',
                        title: 'Principal ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Portfolio Product Associations': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Portfolio Name',
                        field: 'portfolioname',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'productid',
                        title: 'Product ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'portfolioid',
                        title: 'Portfolio ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Accepted Portfolio Shares': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'providername',
                        title: 'Provider Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'CloudFormation Products': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'productid',
                        title: 'Product ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'distributor',
                        title: 'Distributor',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'CloudFormation Provisioned Products': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'productid',
                        title: 'Product ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'provisioningartifactid',
                        title: 'Provisioning Artifact ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Launch Notification Constraints': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Launch Role Constraints': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Launch Template Constraints': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Stack Set Constraints': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Tag Options': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'key',
                        title: 'Key',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'value',
                        title: 'Value',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Tag Option Associations': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Resource Name',
                        field: 'resourcename',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'tagoptionid',
                        title: 'Tag Option ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resourceid',
                        title: 'Resource ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableManagementAndGovernanceServiceCatalog() {
    blockUI('#section-managementandgovernance-servicecatalog-portfolios-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-portfolioprincipalassociations-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-portfolioproductassociations-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-acceptedportfolioshares-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-cloudformationproducts-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-cloudformationprovisionedproducts-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-launchnotificationconstraints-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-launchroleconstraints-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-launchtemplateconstraints-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-stacksetconstraints-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-tagoptions-datatable');
    blockUI('#section-managementandgovernance-servicecatalog-tagoptionassociations-datatable');

    await sdkcall("ServiceCatalog", "listPortfolios", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-servicecatalog-portfolios-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-servicecatalog-portfolioprincipalassociations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.PortfolioDetails.map(portfolio => {
            return Promise.all([
                sdkcall("ServiceCatalog", "listPrincipalsForPortfolio", {
                    PortfolioId: portfolio.Id
                }, true).then((data) => {
                    data.Principals.forEach(principal => {
                        $('#section-managementandgovernance-servicecatalog-portfolioprincipalassociations-datatable').bootstrapTable('append', [{
                            f2id: data.PortfolioDetail.ARN,
                            f2type: 'servicecatalog.portfolioprincipalassociation',
                            f2data: {
                                'portfolio': portfolio,
                                'principal': principal
                            },
                            f2region: region,
                            principalarn: principal.PrincipalARN,
                            portfolioid: portfolio.Id
                        }]);
                    });
                }),
                sdkcall("ServiceCatalog", "describePortfolio", {
                    Id: portfolio.Id
                }, true).then((data) => {
                    $('#section-managementandgovernance-servicecatalog-portfolios-datatable').bootstrapTable('append', [{
                        f2id: data.PortfolioDetail.ARN,
                        f2type: 'servicecatalog.portfolio',
                        f2data: data,
                        f2region: region,
                        name: data.PortfolioDetail.DisplayName,
                        id: data.PortfolioDetail.Id,
                        description: data.PortfolioDetail.Description,
                        providername: data.PortfolioDetail.ProviderName
                    }]);
                })
            ]);
        }));

        unblockUI('#section-managementandgovernance-servicecatalog-portfolios-datatable');
        unblockUI('#section-managementandgovernance-servicecatalog-portfolioprincipalassociations-datatable');
    });

    await sdkcall("ServiceCatalog", "searchProductsAsAdmin", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-servicecatalog-cloudformationproducts-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ProductViewDetails.map(productView => {
            return sdkcall("ServiceCatalog", "describeProductAsAdmin", {
                Id: productView.ProductViewSummary.Id
            }, true).then((data) => {
                if (data.ProductViewDetail.ProductViewSummary.Type == "CLOUD_FORMATION_TEMPLATE") {
                    $('#section-managementandgovernance-servicecatalog-cloudformationproducts-datatable').bootstrapTable('append', [{
                        f2id: data.ProductViewDetail.ProductViewSummary.Id,
                        f2type: 'servicecatalog.cloudformationproduct',
                        f2data: data,
                        f2region: region,
                        name: data.ProductViewDetail.ProductViewSummary.Name,
                        id: data.ProductViewDetail.ProductViewSummary.Id,
                        productid: data.ProductViewDetail.ProductViewSummary.ProductId,
                        description: data.ProductViewDetail.ProductViewSummary.ShortDescription,
                        distributor: data.ProductViewDetail.ProductViewSummary.Distributor
                    }]);
                }
            });
        }));

        unblockUI('#section-managementandgovernance-servicecatalog-cloudformationproducts-datatable');
    });

    await sdkcall("ServiceCatalog", "listAcceptedPortfolioShares", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-servicecatalog-acceptedportfolioshares-datatable').bootstrapTable('removeAll');

        data.PortfolioDetails.forEach(portfolio => {
            $('#section-managementandgovernance-servicecatalog-acceptedportfolioshares-datatable').bootstrapTable('append', [{
                f2id: portfolio.ARN,
                f2type: 'servicecatalog.acceptedportfolioshare',
                f2data: portfolio,
                f2region: region,
                name: portfolio.DisplayName,
                id: portfolio.Id,
                description: portfolio.Description,
                providername: portfolio.ProviderName
            }]);
        });

        unblockUI('#section-managementandgovernance-servicecatalog-acceptedportfolioshares-datatable');
    });

    await sdkcall("ServiceCatalog", "searchProvisionedProducts", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-servicecatalog-cloudformationprovisionedproducts-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-servicecatalog-portfolioproductassociations-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-servicecatalog-launchnotificationconstraints-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-servicecatalog-launchroleconstraints-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-servicecatalog-launchtemplateconstraints-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-servicecatalog-stacksetconstraints-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ProvisionedProducts.map(provisionedProduct => {
            return Promise.all([
                sdkcall("ServiceCatalog", "listPortfoliosForProduct", {
                    ProductId: provisionedProduct.Id
                }, true).then(async (data) => {
                    await Promise.all(data.PortfolioDetails.map(portfolio => {
                        $('#section-managementandgovernance-servicecatalog-portfolioproductassociations-datatable').bootstrapTable('append', [{
                            f2id: portfolio.ARN,
                            f2type: 'servicecatalog.portfolioproductassociation',
                            f2data: {
                                'portfolio': portfolio,
                                'product': provisionedProduct
                            },
                            f2region: region,
                            portfolioname: portfolio.DisplayName,
                            portfolioid: portfolio.Id,
                            productid: provisionedProduct.Id
                        }]);

                        return sdkcall("ServiceCatalog", "listConstraintsForPortfolio", {
                            PortfolioId: portfolio.Id
                        }, true).then(async (data) => {
                            await Promise.all(data.ConstraintDetails.map(constraint => {
                                return sdkcall("ServiceCatalog", "describeConstraint", {
                                    Id: constraint.ConstraintId
                                }, true).then((data) => {
                                    data['PortfolioId'] = portfolio.Id;
                                    data['ProductId'] = provisionedProduct.Id;

                                    if (data.ConstraintDetail.Type == "NOTIFICATION") {
                                        $('#section-managementandgovernance-servicecatalog-launchnotificationconstraints-datatable').bootstrapTable('append', [{
                                            f2id: data.ConstraintDetail.ConstraintId,
                                            f2type: 'servicecatalog.launchnotificationconstraint',
                                            f2data: data,
                                            f2region: region,
                                            id: data.ConstraintDetail.ConstraintId,
                                            description: data.ConstraintDetail.Description
                                        }]);
                                    } else if (data.ConstraintDetail.Type == "LAUNCH") {
                                        $('#section-managementandgovernance-servicecatalog-launchroleconstraints-datatable').bootstrapTable('append', [{
                                            f2id: data.ConstraintDetail.ConstraintId,
                                            f2type: 'servicecatalog.launchroleconstraint',
                                            f2data: data,
                                            f2region: region,
                                            id: data.ConstraintDetail.ConstraintId,
                                            description: data.ConstraintDetail.Description
                                        }]);
                                    } else if (data.ConstraintDetail.Type == "TEMPLATE") {
                                        $('#section-managementandgovernance-servicecatalog-launchtemplateconstraints-datatable').bootstrapTable('append', [{
                                            f2id: data.ConstraintDetail.ConstraintId,
                                            f2type: 'servicecatalog.launchtemplateconstraint',
                                            f2data: data,
                                            f2region: region,
                                            id: data.ConstraintDetail.ConstraintId,
                                            description: data.ConstraintDetail.Description
                                        }]);
                                    } else if (data.ConstraintDetail.Type == "STACKSET") {
                                        $('#section-managementandgovernance-servicecatalog-stacksetconstraints-datatable').bootstrapTable('append', [{
                                            f2id: data.ConstraintDetail.ConstraintId,
                                            f2type: 'servicecatalog.stacksetconstraint',
                                            f2data: data,
                                            f2region: region,
                                            id: data.ConstraintDetail.ConstraintId,
                                            description: data.ConstraintDetail.Description
                                        }]);
                                    }
                                });
                            }));
                        });
                    }));
                }),
                sdkcall("ServiceCatalog", "describeProvisionedProduct", {
                    Id: provisionedProduct.Id
                }, true).then((data) => {
                    if (data.ProvisionedProductDetail.Type == "CFN_STACK") {
                        data['Product'] = provisionedProduct;

                        $('#section-managementandgovernance-servicecatalog-cloudformationprovisionedproducts-datatable').bootstrapTable('append', [{
                            f2id: data.ProvisionedProductDetail.Arn,
                            f2type: 'servicecatalog.cloudformationprovisionedproduct',
                            f2data: data,
                            f2region: region,
                            name: data.ProvisionedProductDetail.Name,
                            id: data.ProvisionedProductDetail.Id,
                            productid: data.ProvisionedProductDetail.ProductId,
                            provisioningartifactid: data.ProvisionedProductDetail.ProvisioningArtifactId
                        }]);
                    }
                })
            ]);
        }));

        unblockUI('#section-managementandgovernance-servicecatalog-cloudformationprovisionedproducts-datatable');
        unblockUI('#section-managementandgovernance-servicecatalog-portfolioproductassociations-datatable');
        unblockUI('#section-managementandgovernance-servicecatalog-launchnotificationconstraints-datatable');
        unblockUI('#section-managementandgovernance-servicecatalog-launchroleconstraints-datatable');
        unblockUI('#section-managementandgovernance-servicecatalog-launchtemplateconstraints-datatable');
        unblockUI('#section-managementandgovernance-servicecatalog-stacksetconstraints-datatable');
    });

    await sdkcall("ServiceCatalog", "listTagOptions", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-servicecatalog-tagoptions-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-servicecatalog-tagoptionassociations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.TagOptionDetails.map(tagOption => {
            return Promise.all([
                sdkcall("ServiceCatalog", "listResourcesForTagOption", {
                    TagOptionId: tagOption.Id
                }, true).then((data) => {
                    data.ResourceDetails.forEach(resource => {
                        $('#section-managementandgovernance-servicecatalog-tagoptionassociations-datatable').bootstrapTable('append', [{
                            f2id: resource.ARN,
                            f2type: 'servicecatalog.tagoptionassociation',
                            f2data: {
                                'resource': resource,
                                'tagoption': tagOption
                            },
                            f2region: region,
                            resourcename: resource.Name,
                            resourceid: resource.Id,
                            tagoptionid: tagOption.Id
                        }]);
                    });
                }),
                sdkcall("ServiceCatalog", "describeTagOption", {
                    Id: tagOption.Id
                }, true).then((data) => {
                    $('#section-managementandgovernance-servicecatalog-tagoptions-datatable').bootstrapTable('append', [{
                        f2id: data.TagOptionDetail.Id,
                        f2type: 'servicecatalog.tagoption',
                        f2data: data.TagOptionDetail,
                        f2region: region,
                        id: data.TagOptionDetail.Id,
                        key: data.TagOptionDetail.Key,
                        value: data.TagOptionDetail.Value
                    }]);
                })
            ]);
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-servicecatalog-tagoptions-datatable');
    unblockUI('#section-managementandgovernance-servicecatalog-tagoptionassociations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "servicecatalog.cloudformationproduct") {
        reqParams.cfn['Name'] = obj.data.ProductViewDetail.ProductViewSummary.Name;
        reqParams.cfn['Owner'] = obj.data.ProductViewDetail.ProductViewSummary.Owner;
        reqParams.cfn['SupportDescription'] = obj.data.ProductViewDetail.ProductViewSummary.SupportDescription;
        reqParams.cfn['Description'] = obj.data.ProductViewDetail.ProductViewSummary.ShortDescription;
        reqParams.cfn['Distributor'] = obj.data.ProductViewDetail.ProductViewSummary.Distributor;
        reqParams.cfn['SupportEmail'] = obj.data.ProductViewDetail.ProductViewSummary.SupportEmail;
        reqParams.cfn['SupportUrl'] = obj.data.ProductViewDetail.ProductViewSummary.SupportUrl;
        reqParams.cfn['AcceptLanguage'] = 'en'; // TODO: Check for others
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        ProvisioningArtifactParameters: 
            - ProvisioningArtifactProperties
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::CloudFormationProduct',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.portfolio") {
        reqParams.cfn['ProviderName'] = obj.data.PortfolioDetail.ProviderName;
        reqParams.cfn['Description'] = obj.data.PortfolioDetail.Description;
        reqParams.cfn['DisplayName'] = obj.data.PortfolioDetail.DisplayName;
        reqParams.cfn['ProviderName'] = obj.data.PortfolioDetail.ProviderName;
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        AcceptLanguage: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::Portfolio',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.portfolioprincipalassociation") {
        reqParams.cfn['PrincipalARN'] = obj.data.principal.PrincipalARN;
        reqParams.cfn['PrincipalType'] = obj.data.principal.PrincipalType;
        reqParams.cfn['PortfolioId'] = obj.data.portfolio.Id;

        /*
        TODO:
        AcceptLanguage: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::PortfolioPrincipalAssociation',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.launchnotificationconstraint") {
        reqParams.cfn['Description'] = obj.data.ConstraintDetail.Description;
        reqParams.cfn['PortfolioId'] = obj.data.PortfolioId;
        reqParams.cfn['ProductId'] = obj.data.ProductId;

        /*
        TODO:
        NotificationArns: 
            - String
        AcceptLanguage: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::LaunchNotificationConstraint',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.launchroleconstraint") {
        reqParams.cfn['Description'] = obj.data.ConstraintDetail.Description;
        reqParams.cfn['PortfolioId'] = obj.data.PortfolioId;
        reqParams.cfn['ProductId'] = obj.data.ProductId;

        /*
        TODO:
        AcceptLanguage: String
        RoleArn: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::LaunchRoleConstraint',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.launchtemplateconstraint") {
        reqParams.cfn['Description'] = obj.data.ConstraintDetail.Description;
        reqParams.cfn['PortfolioId'] = obj.data.PortfolioId;
        reqParams.cfn['ProductId'] = obj.data.ProductId;

        /*
        TODO:
        AcceptLanguage: String
        Rules: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::LaunchTemplateConstraint',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.stacksetconstraint") {
        reqParams.cfn['Description'] = obj.data.ConstraintDetail.Description;
        reqParams.cfn['PortfolioId'] = obj.data.PortfolioId;
        reqParams.cfn['ProductId'] = obj.data.ProductId;

        /*
        TODO:
        AcceptLanguage: String
        AccountList: 
            - String
        AdminRole: String
        ExecutionRole: String
        RegionList: 
            - String
        StackInstanceControl: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::StackSetConstraint',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.acceptedportfolioshare") {
        reqParams.cfn['PortfolioId'] = obj.data.portfolio.Id;

        /*
        TODO:
        AcceptLanguage: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::AcceptedPortfolioShare',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.portfolioproductassociation") {
        reqParams.cfn['PortfolioId'] = obj.data.portfolio.Id;
        reqParams.cfn['ProductId'] = obj.data.product.Id;
        reqParams.cfn[''] = obj.data;

        /*
        TODO:
        SourcePortfolioId: String
        AcceptLanguage: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::PortfolioProductAssociation',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.cloudformationprovisionedproduct") {
        reqParams.cfn['ProvisionedProductName'] = obj.data.ProvisionedProductDetail.Name;
        reqParams.cfn['ProductId'] = obj.data.ProvisionedProductDetail.ProductId;
        reqParams.cfn['ProvisioningArtifactId'] = obj.data.ProvisionedProductDetail.ProvisioningArtifactId;
        reqParams.cfn['ProductName'] = obj.data.Product.Name;

        /*
        TODO:
        PathId: String
        ProvisioningParameters: 
            - ProvisioningParameter
        ProvisioningArtifactName: String
        NotificationArns: 
            - String
        AcceptLanguage: String
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::CloudFormationProvisionedProduct',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.tagoption") {
        reqParams.cfn['Key'] = obj.data.Key;
        reqParams.cfn['Value'] = obj.data.Value;
        reqParams.cfn['Active'] = obj.data.Active;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::TagOption',
            'options': reqParams
        });
    } else if (obj.type == "servicecatalog.tagoptionassociation") {
        reqParams.cfn['TagOptionId'] = obj.data.tagoption.Id;
        reqParams.cfn['ResourceId'] = obj.data.resource.Id;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('servicecatalog', obj.id),
            'region': obj.region,
            'service': 'servicecatalog',
            'type': 'AWS::ServiceCatalog::TagOptionAssociation',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});