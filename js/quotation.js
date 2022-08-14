let quotationData = {
    'place':{
        'home':{
            'payload': function (){
                return {
                    'propertyType': 'home',
                }
            },
            'type': {
                'house': {
                    'payload': function () {
                        return {
                            'propertySubtype': 'house',
                        }
                    }
                },
                'apartment': {
                    'payload': function () {
                        return {
                            'propertySubtype': 'house',
                        }
                    }
                }
            },
            'area': {
                '50': {
                    'payload': function() {
                        return {
                            'areaOfProperty': '50',
                            'areaUnit': 'm2'
                        }
                    }
                },
                '100': {
                    'payload': function() {
                        return {
                            'areaOfProperty': '100',
                            'areaUnit': 'm2'
                        }
                    }
                },
                '150': {
                    'payload': function() {
                        return {
                            'areaOfProperty': '150',
                            'areaUnit': 'm2'
                        }
                    }
                },
                'others': {
                    'payload': function() {
                        return {
                            'areaOfProperty': 'others',
                            'areaUnit': 'm2'
                        }
                    }
                },
            },
            'floors': {
                '1': {
                    'payload': function() {
                        return {
                            'numberOfFloors': '1'
                        }
                    },
                },
                '2': {
                    'payload': function() {
                        return {
                            'numberOfFloors': '2'
                        }
                    },
                },
                '3': {
                    'payload': function() {
                        return {
                            'numberOfFloors': '3'
                        }
                    },
                },
                'greater_than_3': {
                    'payload': function() {
                        return {
                            'numberOfFloors': '> 3'
                        }
                    },
                },
            },
            'rooms': {
                'min_1_max_2': {
                    'payload': function() {
                        return {
                            'rooms': '1 - 2',
                        }
                    },
                },
                'min_3_max_4': {
                    'payload': function() {
                        return {
                            'rooms': '3 - 4',
                        }
                    },
                },
                'min_5_max_6': {
                    'payload': function() {
                        return {
                            'rooms': '5 - 6',
                        }
                    },
                },
                'greater_than_6': {
                    'payload': function() {
                        return {
                            'rooms': '> 6',
                        }
                    },
                },
            },
            'people': {
                'less_10': {
                    'payload': function() {
                        return {
                            'people': '< 10',
                        }
                    },
                },
                'min_10_max_30': {
                    'payload': function() {
                        return {
                            'people': '10 - 30',
                        }
                    },
                },
                'min_30_max_60': {
                    'payload': function() {
                        return {
                            'people': '30 - 60',
                        }
                    },
                },
                'greater_than_60': {
                    'payload': function() {
                        return {
                            'people': '> 60',
                        }
                    },
                },
            }
        },
        'office':{
            'payload': function (){
                return {
                    'propertyType': 'office',
                }
            },
            'type': {
                'inside_building': {
                    'payload': function () {
                        return {
                            'propertySubtype': 'Inside a building',
                        }
                    }
                },
                'home_office': {
                    'payload': function () {
                        return {
                            'propertySubtype': 'Home Office',
                        }
                    }
                }
            },
            'area': {
                '50': {
                    'payload': function() {
                        return {
                            'areaOfProperty': '50',
                            'areaUnit': 'm2'
                        }
                    }
                },
                '100': {
                    'payload': function() {
                        return {
                            'areaOfProperty': '100',
                            'areaUnit': 'm2'
                        }
                    }
                },
                '150': {
                    'payload': function() {
                        return {
                            'areaOfProperty': '150',
                            'areaUnit': 'm2'
                        }
                    }
                },
                'others': {
                    'payload': function() {
                        return {
                            'areaOfProperty': 'others',
                            'areaUnit': 'm2'
                        }
                    }
                },
            },
            'floors': {
                '1': {
                    'payload': function() {
                        return {
                            'numberOfFloors': '1'
                        }
                    },
                },
                '2': {
                    'payload': function() {
                        return {
                            'numberOfFloors': '2'
                        }
                    },
                },
                '3': {
                    'payload': function() {
                        return {
                            'numberOfFloors': '3'
                        }
                    },
                },
                'greater_than_3': {
                    'payload': function() {
                        return {
                            'numberOfFloors': '> 3'
                        }
                    },
                },
            },
            'rooms': {
                'min_1_max_2': {
                    'payload': function() {
                        return {
                            'rooms': '1 - 2',
                        }
                    },
                },
                'min_3_max_4': {
                    'payload': function() {
                        return {
                            'rooms': '3 - 4',
                        }
                    },
                },
                'min_5_max_6': {
                    'payload': function() {
                        return {
                            'rooms': '5 - 6',
                        }
                    },
                },
                'greater_than_6': {
                    'payload': function() {
                        return {
                            'rooms': '> 6',
                        }
                    },
                },
            },
            'people': {
                'less_10': {
                    'payload': function() {
                        return {
                            'people': '< 10',
                        }
                    },
                },
                'min_10_max_30': {
                    'payload': function() {
                        return {
                            'people': '10 - 30',
                        }
                    },
                },
                'min_30_max_60': {
                    'payload': function() {
                        return {
                            'people': '30 - 60',
                        }
                    },
                },
                'greater_than_60': {
                    'payload': function() {
                        return {
                            'people': '> 60',
                        }
                    },
                },
            }
        },
    }
}
function onAnswerClicked(el) {
    let key = el.dataset.key;
    let item = _.get(quotationData, key, false)
    if (item) {
        console.log(item.payload())
        let quotationData = window.quotationData
        if (!quotationData) {
            quotationData = {}
        }
        const newObj = Object.assign({}, quotationData, item.payload())
        quotationData = newObj
        window.quotationData = quotationData
    }
    if (!item) {
        alert("error key" + key + 'not exist')
        return
    }
}
function onSaved(e) {
    console.log(window.quotationData)
    if (!window.quotationData) {
        alert("QuotationData is empty")
    }
    let quotationData = window.quotationData
    let user = {
        'name': $('#quotation_name').val(),
        'city': $('#quotation_city').val(),
        'email': $('#quotation_email').val(),
        'phoneNumber': $('#quotation_phoneNumber').val(),
        'companyName': $('#quotation_companyName').val(),
    }
    let finalPayload = _.merge({}, quotationData, user)
    console.log(finalPayload)
}