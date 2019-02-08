//<script>
"use strict";
const rawTree = {
    // weirdNode1
    "0": {
        "timezone": "PST+8PDT", 
        "stoptime": "'2000-01-02 00:00:00'", 
        "starttime": "'2000-01-01 00:00:00'", 
        "clock": "clock"
    }, 
    // weirdNode2
    "1": {
        "omftype": "#set", 
        "argument": "minimum_timestep=60"
    }, 
    // node1
    "245000": {
        "phases": "ABC", 
        "name": "nodeT10263825298", 
        "object": "node", 
        "longitude": "571.1273158682793", 
        "nominal_voltage": "7200.0", 
        "latitude": "279.0611346507024"
    }, 
    // node1Line1
    "368700": {
        "phases": "BS", 
        "from": "nodeT10263825298", 
        "name": "T10263_B", 
        "object": "transformer", 
        "to": "nodeS1707-03-015T10263_B", 
        "configuration": "1807--T325_B-CONFIG"
    }, 
    // node1Line1End
    "285800": {
        "phases": "BS", 
        "name": "nodeS1707-03-015T10263_B", 
        "object": "triplex_meter", 
        "longitude": "594.4864602890987", 
        "nominal_voltage": "120", 
        "latitude": "255.701990229883"
    }, 
    // node1Line1EndChild1
    "326000": {
        "phases": "BS", 
        "power_12": "2668.11+1983.57j", 
        "name": "S1707-03-015_B", 
        "parent": "nodeS1707-03-015T10263_B", 
        "object": "triplex_node", 
        "longitude": "622.0927218773398", 
        "nominal_voltage": "120", 
        "latitude": "253.57843164617213"
    }, 
    // node1Line2
    "368500": {
        "phases": "AS", 
        "from": "nodeT10263825298", 
        "name": "T10263_A", 
        "object": "transformer", 
        "to": "nodeS1707-03-015T10263_A", 
        "configuration": "T10285_A-CONFIG"
    }, 
    // node1Line2End
    "285600": {
        "phases": "AS", 
        "name": "nodeS1707-03-015T10263_A", 
        "object": "triplex_meter", 
        "longitude": "619.4382736477013", 
        "nominal_voltage": "120", 
        "latitude": "297.6422560567061"
    }, 
    // node1Line2EndChild1
    "325800": {
        "phases": "AS", 
        "power_12": "2668.11+1983.57j", 
        "name": "S1707-03-015_A", 
        "parent": "nodeS1707-03-015T10263_A", 
        "object": "triplex_node", 
        "longitude": "605.104253207653", 
        "nominal_voltage": "120", 
        "latitude": "320.47051083159784"
    }, 
    // node1Line3
    "368600": {
        "phases": "CS", 
        "from": "nodeT10263825298", 
        "name": "T10263_C", 
        "object": "transformer", 
        "to": "nodeS1707-03-015T10263_C", 
        "configuration": "1807--T325_C-CONFIG"
    }, 
    // node1Line3End
    "285700": {
        "phases": "CS", 
        "name": "nodeS1707-03-015T10263_C", 
        "object": "triplex_meter", 
        "longitude": "563.6948608252912", 
        "nominal_voltage": "120", 
        "latitude": "243.49152837354555"
    }, 
    // node1Line3EndChild1
    "325900": {
        "phases": "CS", 
        "power_12": "2668.11+1983.57j", 
        "name": "S1707-03-015_C", 
        "parent": "nodeS1707-03-015T10263_C", 
        "object": "triplex_node", 
        "longitude": "545.644612863749", 
        "nominal_voltage": "120", 
        "latitude": "228.09572864164187"
    }, 
    // node1Line4
    "116900": {
        "phases": "ACB", 
        "from": "node825298923940", 
        "name": "825298", 
        "object": "underground_line", 
        "longitude": "529.037660472", 
        "to": "nodeT10263825298", 
        "length": "621", 
        "latitude": "284.670992574", 
        "configuration": "825456-LINECONFIG"
    }, 
    // node2 === node1Line4End (node off the main part of ABEC)
    "244900": {
        "phases": "ABC", 
        "name": "node825298923940", 
        "object": "node", 
        "longitude": "529.037660472", 
        "nominal_voltage": "7200.0", 
        "latitude": "274.670992574"
    }, 
    // node2Line1
    "117200": {
        "phases": "B", 
        "from": "node825298923940", 
        "name": "923941", 
        "object": "underground_line", 
        "longitude": "534.263309411", 
        "to": "nodeT6247418245957866", 
        "length": "417", 
        "latitude": "258.557647233", 
        "configuration": "825117-LINECONFIG"
    }, 
    // node2Line1End == node3
    // node2Line2
    "116800": {
        "phases": "ACB", 
        "from": "node7055970558", 
        "name": "923940", 
        "object": "underground_line", 
        "longitude": "524.65806898", 
        "to": "node825298923940", 
        "length": "630", 
        "latitude": "263.265155066", 
        "configuration": "923991-LINECONFIG"
    }, 
    // node2Line2End
    "140120": {
        "phases": "ABCN", 
        "name": "node7055970558", 
        "object": "node", 
        "longitude": "558.3859643660142", 
        "nominal_voltage": "7200.0", 
        "latitude": "312.50718234414836"
    }, 
    // node2Line2EndChild1
    "60720": {
        "control": "VOLT", 
        "dwell_time": "0.0", 
        "object": "capacitor", 
        "name": "CAP134", 
        "parent": "node7055970558", 
        "capacitor_B": "0.10 MVAr", 
        "capacitor_C": "0.10 MVAr", 
        "capacitor_A": "0.10 MVAr", 
        "phases": "ABCN", 
        "longitude": "620.7180398965284", 
        "time_delay": "300.0", 
        "switchC": "CLOSED", 
        "nominal_voltage": "2401.7771", 
        "voltage_set_high": "2350.0", 
        "voltage_set_low": "2340.0", 
        "latitude": "470.93253526327317", 
        "control_level": "INDIVIDUAL", 
        "switchA": "CLOSED", 
        "switchB": "CLOSED", 
        "phases_connected": "ABCN", 
        "pt_phase": "ABCN"
    }, 
    // node2Line3
    "117600": {
        "phases": "ACB", 
        "from": "node825298923940", 
        "name": "923942", 
        "object": "underground_line", 
        "longitude": "563.750899855", 
        "to": "nodeT6246217033670559", 
        "length": "1904", 
        "latitude": "244.93844218", 
        "configuration": "923991-LINECONFIG"
    }, 
    // node2Line3End
    "140220": {
        "phases": "ABCN", 
        "name": "nodeT6246217033670559", 
        "object": "node", 
        "longitude": "522.8163580888573", 
        "nominal_voltage": "7200.0", 
        "latitude": "345.42234039166664"
    }, 
    // node2Line3EndLine
    "52220": {
        "phases": "AN", 
        "from": "nodeT6246217033670559", 
        "name": "17127", 
        "object": "overhead_line", 
        "longitude": "622.2431817865727", 
        "to": "nodeF526917127", 
        "length": "25.2353", 
        "latitude": "469.0231890245341", 
        "configuration": "18949line_configuration24501"
    }, 
    // node2Line3EndLineEnd
    "140320": {
        "phases": "AN", 
        "name": "nodeF526917127", 
        "object": "node", 
        "longitude": "546.7063921556045", 
        "nominal_voltage": "7200.0", 
        "latitude": "360.28725047764266"
    }, 
    // node3 === node2Line1End (main node of 3 houses)
    "136420": {
        "phases": "AN", 
        "name": "nodeT6247418245957866", 
        "object": "node", 
        "longitude": "454.528228025527", 
        "nominal_voltage": "7200.0", 
        "latitude": "377.2278969234081"
    }, 
    // node3Line1
    "46420": {
        "phases": "AS", 
        "from": "nodeT6247418245957866", 
        "name": "T62474182459", 
        "object": "transformer", 
        "longitude": "104.18010219805728", 
        "to": "node62474182499T62474182459", 
        "latitude": "666.852052925009", 
        "configuration": "T62474206624transformer_configuration90001"
    }, 
    // node3Line1End (parent of 3 houses)
    "136520": {
        "phases": "AS", 
        "name": "node62474182499T62474182459", 
        "object": "triplex_meter", 
        "longitude": 410.7928844905687,
        "nominal_voltage": "120", 
        "latitude": 467.61430322224993
    }, 
    // node3Line1EndChild1 (house with 2 children)
    "172262": {
        "schedule_skew": "761", 
        "name": "house172262", 
        "parent": "node62474182499T62474182459", 
        "floor_area": "2200", 
        "cooling_COP": "3.4", 
        "object": "house", 
        "cooling_system_type": "ELECTRIC", 
        "longitude": 276.67116431669666, 
        "heating_setpoint": "heating4*1", 
        "cooling_setpoint": "cooling7*1", 
        "air_temperature": "70", 
        "thermal_integrity_level": "5", 
        "heating_COP": "2.4", 
        "latitude": 441.3730674413469, 
        "mass_temperature": "70", 
        "heating_system_type": "HEAT_PUMP"
    }, 
    // node3Line1EndChild1Child1
    "172263": {
        "parent": "house172262", 
        "schedule_skew": "1100", 
        "name": "ZIPload172263", 
        "power_fraction": "0.400000", 
        "object": "ZIPload", 
        "current_fraction": "0.300000", 
        "longitude": 274.72737127069854, 
        "base_power": "LIGHTS*1.33", 
        "latitude": 399.5815169523868, 
        "current_pf": "1.000", 
        "power_pf": "1.000", 
        "heatgain_fraction": "0.9", 
        "impedance_fraction": "0.300000", 
        "impedance_pf": "1.000"
    }, 
    // node3Line1EndChild1Child2
    "172295": {
        "schedule_skew": "998", 
        "heating_element_capacity": "5.2", 
        "parent": "house172262", 
        "tank_volume": "50", 
        "object": "waterheater", 
        "longitude": 237.79530339673374, 
        "thermostat_deadband": "4.6", 
        "location": "INSIDE", 
        "demand": "water16*1", 
        "latitude": 479.2770614982388, 
        "temperature": "135", 
        "tank_setpoint": "132", 
        "tank_UA": "2.6", 
        "name": "waterheater172295"
    }, 
    // node3Line1EndChild2 (house with single child)
    "172260": {
        "schedule_skew": "-2400", 
        "name": "house172260", 
        "parent": "node62474182499T62474182459", 
        "floor_area": "1400", 
        "cooling_COP": "2.9", 
        "object": "house", 
        "cooling_system_type": "NONE", 
        "longitude": 359.2823687716179, 
        "heating_setpoint": "heating5*1", 
        "cooling_setpoint": "cooling8*1", 
        "air_temperature": "70", 
        "thermal_integrity_level": "6", 
        "heating_COP": "3.3", 
        "latitude": 523.0124050331971, 
        "mass_temperature": "70", 
        "heating_system_type": "RESISTANCE"
    }, 
    // node3Line1EndChild2Child1
    "172261": {
        "parent": "house172260", 
        "schedule_skew": "3510", 
        "name": "ZIPload172261", 
        "power_fraction": "0.400000", 
        "object": "ZIPload", 
        "current_fraction": "0.300000", 
        "longitude": 319.4346113286559, 
        "base_power": "LIGHTS*1.33", 
        "latitude": 557.0287833381647, 
        "current_pf": "1.000", 
        "power_pf": "1.000", 
        "heatgain_fraction": "0.9", 
        "impedance_fraction": "0.300000", 
        "impedance_pf": "1.000"
    }, 
    // node3Line1EndChild3 (house with no children)
    "172264": {
        "schedule_skew": "-1600", 
        "name": "house172264", 
        "parent": "node62474182499T62474182459", 
        "floor_area": "1500", 
        "cooling_COP": "2.6", 
        "object": "house", 
        "cooling_system_type": "NONE", 
        "longitude": 442.86546974953814, 
        "heating_setpoint": "heating4*1", 
        "cooling_setpoint": "cooling3*1", 
        "air_temperature": "70", 
        "thermal_integrity_level": "4", 
        "heating_COP": "2.8", 
        "latitude": 549.2536111541721,
        "mass_temperature": "70", 
        "heating_system_type": "RESISTANCE"
    }, 
    // orphanNode1: has a 'parent' node, but that node does not exist.
    "172265": {
        "parent": "madeUpHouse", 
        "schedule_skew": "-3120", 
        "name": "ZIPload172265", 
        "power_fraction": "0.400000", 
        "object": "ZIPload", 
        "current_fraction": "0.300000", 
        "longitude": 409.82098796756964, 
        "base_power": "LIGHTS*1.33", 
        "latitude": 588.129472074135, 
        "current_pf": "1.000", 
        "power_pf": "1.000", 
        "heatgain_fraction": "0.9", 
        "impedance_fraction": "0.300000", 
        "impedance_pf": "1.000"
    }, 
    // orphanLine1: has valid "from" and "to" values, but those nodes don't exist
    "33420": {
        "phases": "ACBN", 
        "from": "nodeDoesntExist1", 
        "name": "17783", 
        "object": "overhead_line", 
        "longitude": 405.7790593997488, 
        "to": "nodeDoesntExist2", 
        "length": "338.245", 
        "latitude": 614.664711377176, 
        "configuration": "16564line_configuration32701"
    },
    // funkyLine1: a line is never found between two houses like this
    "121212": {
        "phases": "CS", 
        "from": "house172262", 
        "name": "Decepticon", 
        "object": "transformer", 
        "to": "house172260", 
        "configuration": "1807--T325_C-CONFIG"
    }, 
    "343434": {// funkyLine2: a line is never found between two houses like this
        "phases": "CS", 
        "from": "house172260", 
        "name": "AutoBot", 
        "object": "transformer", 
        "to": "house172264", 
        "configuration": "1807--T325_C-CONFIG"
    }, 
    "00900": {// childOfLine (node2Line1)
        object: "waterheater",
        name: "waterheater00900",
        parent: "T62474182459",
        longitude: 408.17398807424905,
        latitude: 403.9973646798732
    },
    "113118": {// lineToLoad
        object: "regulator",
        name: "regulator88",
        from: "node7055970558",
        to: "S1707-03-015_A",
        phases: "A"
    }
};
let rawTreeCopy = deepCopy(rawTree);
let testTree = createTree(rawTreeCopy);
/* 
TODO: If key === 0, longitude === 0, latitude === 0 (or some other property === 0), the code could 
break in funny ways. I need to check for undefined explicitly instead of using !<property>
TODO: build a tree that is more representative of the actual data

Tree does NOT contain any cycles

Some latitudes and longitudes are strings while others are numbers in the .omd files. Is this a problem?

Hardcoding test data like this is bad because if the original data ever changes structure, the methods will fail but
these unit tests will still pass. However, it is necessary because the alternative would be to use the real rawTreeCopy from a .omd
file and then these unit tests would be dependent on a particular .omd file which is even worse.

39 keys for 37 objects.
The rawTreeCopy is fairly well-formed, aside from the orphan line and orphan node. It should stay well-formed. If I want to test for really malformed data, I should do it in a unit test.

I should only be testing public functions and methods! 

do not test error handling. It's always changing. But error handling is what matters and is tricky! But I move too slow if I test every error condition. Unit tests need to be as few and as simple as possible or there's too many and it's overwhelming and more harmful than helpful. Also, remember that I'm never testing what DOESN'T happen, unless it's for a very specific tricky case. If I encouter and fix a bug, I can add a test to prevent regressions. Unit tests are BASIC!!!!!
*/
describe("Unit tests", function() {

    const weirdNode1 = "0";
    const weirdNode2 = "1";
    const node1 = "245000";
    const node1Line1 = "368700";
    const node1Line1End = "285800";
    const node1Line1EndChild1 = "326000";
    const node1Line2 = "368500";
    const node1Line2End = "285600";
    const node1Line2EndChild1 = "325800";
    const node1Line3 = "368600";
    const node1Line3End = "285700";
    const node1Line3EndChild1 = "325900";
    const node1Line4 = "116900";
    const node1Line4End = "244900";
    const node2 = node1Line4End;
    const node2Line1 = "117200";
    const node2Line1End  = "136420";
    const node2Line2 = "116800";
    const node2Line2End = "140120";
    const node2Line2EndChild1 = "60720";
    const node2Line3 = "117600";
    const node2Line3End = "140220";
    const node2Line3EndLine = "52220";
    const node2Line3EndLineEnd = "140320";
    const node3 = node2Line1End;
    const node3Line1 = "46420";
    const node3Line1End = "136520";
    const node3Line1EndChild1 = "172262";
    const node3Line1EndChild1Child1 = "172263";
    const node3Line1EndChild1Child2 = "172295";
    const node3Line1EndChild2 = "172260";
    const node3Line1EndChild2Child1 = "172261";
    const node3Line1EndChild3 = "172264";
    const orphanNode1 = "172265";
    const orphanLine1 = "33420";
    const funkyLine1 = "121212";
    const funkyLine2 = "343434";
    const childOfLine = "00900";
    const lineToLoad = "113118";

    const allKeys = [weirdNode1, weirdNode2, node1, node1Line1, node1Line1End, node1Line1EndChild1, node1Line2,
        node1Line2End, node1Line2EndChild1, node1Line3, node1Line3End, node1Line3EndChild1, node1Line4, node1Line4End,
        node2Line1, node2Line1End , node2Line2, node2Line2End, node2Line2EndChild1, node2Line3, node2Line3End,
        node2Line3EndLine, node2Line3EndLineEnd, node3Line1, node3Line1End, node3Line1EndChild1,
        node3Line1EndChild1Child1, node3Line1EndChild1Child2, node3Line1EndChild2, node3Line1EndChild2Child1,
        node3Line1EndChild3, orphanNode1, orphanLine1, funkyLine1, funkyLine2, childOfLine, lineToLoad
    ];

    let consoleErrorSpy;

    beforeEach(function() {
        consoleErrorSpy = spyOn(console, "error");
        rawTreeCopy = deepCopy(rawTree);
        testTree = createTree(rawTreeCopy);
    });
    
    describe("Public functions and methods", function() {
        //good
        describe("createTreeMap()", function() {

            describe("if an object's name property has any of the following values: 'null' (in any letter case), 'undefined' (in any letter case), null, or undefined", function() {

                it("should not map the key of that object to its name", function() {
                    const tree = {
                        "0": {
                            name: "null",
                        },
                        "1": {
                            name: null
                        },
                        "2": {
                            name: "undefined"
                        },
                        "3": {
                            name: undefined
                        },
                        "4": {
                            name: "nUlL"
                        },
                        "5": {
                            name: "UnDefInEd"
                        }
                    };
                    const treeMap = createTreeMap(tree);
                    expect(treeMap.names).toEqual({});
                });
            });

            it("should map the key of each object to its 'name' property in an integration test", function() {
                const treeMap = createTreeMap(rawTreeCopy);
                const names = {};
                Object.keys(rawTreeCopy).forEach(key => {
                    if (rawTreeCopy[key].name != null) {
                        names[rawTreeCopy[key].name] = key;
                    }
                });
                expect(treeMap.names).toEqual(names);
            });

            describe("if a tree object has any of the following values for its 'name' property: null, 'null' (in any letter case), undefined, or 'undefined' (in any letter case), and a child node has any of those values for its 'parent' property",  function() {

                it("should not map that child node to that tree object", function() {
                    const tree = {
                        "0": {
                            name: "null",
                        },
                        "1": {
                            name: null
                        },
                        "2": {
                            name: "undefined"
                        },
                        "3": {
                            name: undefined
                        },
                        "4": {
                            name: "nUlL"
                        },
                        "5": {
                            name: "UnDefInEd"
                        },
                        "6": {
                            parent: "null"
                        },
                        "7": {
                            parent: null
                        },
                        "8": {
                            parent: "undefined"
                        }, 
                        "9": {
                            parent: undefined
                        },
                        "10": {
                            parent: "nUlL"
                        },
                        "11": {
                            parent: "UnDefInEd"
                        }
                    };
                    const treeMap = createTreeMap(tree);
                    Object.keys(tree).forEach(key => {
                        expect(treeMap.children[key]).toBeUndefined();
                    });
                });
            });

            it("should map the key of each object to an array of its child keys in an integration test", function() {
                const treeMap = createTreeMap(rawTreeCopy);
                Object.keys(rawTreeCopy).forEach(parentKey => {
                    if (rawTreeCopy[parentKey].name != null) {
                        const children = [];
                        Object.keys(rawTreeCopy).forEach(childKey => {
                            if (rawTreeCopy[childKey].parent === rawTreeCopy[parentKey].name) {
                                children.push(childKey);
                            }
                        });
                        if (children.length > 0) {
                            expect(treeMap.children[parentKey]).toEqual(children);
                        } else {
                            expect(treeMap.children[parentKey]).toBeUndefined();
                        }
                    }
                });
            });

            describe("if a tree object has any of the following values for its 'name' property: null, 'null' (in any letter case), undefined, or 'undefined' (in any letter case), and a line has any of those values for its 'to' or 'from' properties", function() {

                it("should not map that line to that tree object", function() {
                    const tree = {
                        "0": {
                            name: "null",
                        },
                        "1": {
                            name: null
                        },
                        "2": {
                            name: "undefined"
                        },
                        "3": {
                            name: undefined
                        },
                        "4": {
                            name: "nUlL"
                        },
                        "5": {
                            name: "UnDefInEd"
                        },
                        "6": {
                            to: "null",
                            from: "null"
                        },
                        "7": {
                            to: null,
                            from: null
                        },
                        "8": {
                            to: "undefined",
                            from: "undefined"
                        }, 
                        "9": {
                            to: undefined,
                            from: undefined
                        },
                        "10": {
                            to: "nUlL",
                            from: "nUlL"
                        },
                        "11": {
                            to: "UnDefInEd",
                            from: "UnDefInEd"
                        }
                    };
                    const treeMap = createTreeMap(tree);
                    Object.keys(tree).forEach(key => {
                        expect(treeMap.lines[key]).toBeUndefined();
                    });
                });
            });

            it("should pass an integration test that maps the key of each object to an array of its connected line keys", function() {
                const treeMap = createTreeMap(rawTreeCopy);
                Object.keys(rawTreeCopy).forEach(nodeKey => {
                    if (rawTreeCopy[nodeKey].name != null) {
                        const nodeName = rawTreeCopy[nodeKey].name;
                        const lines = [];
                        Object.keys(rawTreeCopy).forEach(lineKey => {
                            if (rawTreeCopy[lineKey].to === nodeName || rawTreeCopy[lineKey].from === nodeName) {
                                lines.push(lineKey);
                            }
                        });
                        if (lines.length > 0) {
                            expect(treeMap.lines[nodeKey]).toEqual(lines);
                        } else {
                            expect(treeMap.lines[nodeKey]).toBeUndefined();
                        }
                    }
                });
            });
        });
        //good
        describe("treeMapPrototype", function() {

            describe("children mapping function", function() {

                let treeMap;

                beforeEach(function() {
                    const tree = {
                        "0": {
                            object: "node",
                            name: "node0"
                        },
                        "1": {
                            object: "childNode",
                            parent: "node0"
                        },
                        "2": {
                            object: "childNode",
                            parent: "node0"
                        }
                    };
                    treeMap = createTreeMap(tree);
                });
                //good
                describe("mapChild()", function() {

                    describe("if the parent hasn't had any children added to its array yet", function() {

                        it("should store an array containing the child key at the parent key", function() {
                            treeMap.children = {};
                            expect(treeMap.children["0"]).toBeUndefined();
                            treeMap.mapChild("1");
                            expect(treeMap.children["0"]).toEqual(["1"]);
                        });
                    });

                    describe("if the parent already has had children added to its array", function() {

                        describe("if child key already exists in the parent's array", function() {

                            it("should not push the key of the child onto the parent's array", function() {
                                treeMap.children = {};
                                expect(treeMap.children["0"]).toBeUndefined();
                                treeMap.mapChild("1");
                                expect(treeMap.children["0"]).toEqual(["1"]); 
                                treeMap.mapChild("1");
                                expect(treeMap.children["0"]).toEqual(["1"]); 
                            });
                        });
                    });

                    describe("if the child key does not exist in the parent's array", function() {

                        it("should push the child key onto the parent's array", function() {
                            treeMap.children = {};
                            expect(treeMap.children["0"]).toBeUndefined();
                            treeMap.mapChild("1");
                            expect(treeMap.children["0"]).toEqual(["1"]);
                            treeMap.mapChild("2");
                            expect(treeMap.children["0"]).toEqual(["1", "2"]);
                        });
                    });

                    it("should pass an integration test that maps children to parents", function() {
                        const treeMap = createTreeMap(rawTreeCopy);
                        treeMap.children = {};
                        Object.keys(rawTreeCopy).forEach(key => {
                            treeMap.mapChild(key);
                        });
                        expect(testTree.treeMap.children).toEqual(treeMap.children);
                    });
                });
                //good
                describe("unmapChild()", function() {

                    describe("if the child key exists in the parent's array", function() {

                        it("should remove the child key from the parent's array", function() {
                            expect(treeMap.children["0"]).toEqual(["1", "2"]);
                            treeMap.unmapChild("2");
                            expect(treeMap.children["0"]).toEqual(["1"]);
                            treeMap.unmapChild("1");
                            expect(treeMap.children["0"]).toBeUndefined();
                        });
                    });

                    describe("if the object is not a child of any node or line", function() {

                        it("should call console.error()", function() {
                            treeMap.unmapChild("0");
                            expect(treeMap.children).toEqual({"0": ["1", "2"]});
                            expect(consoleErrorSpy).toHaveBeenCalled();
                        });
                    });

                    it("should pass an integration test that unmaps all children from parents", function() {
                        expect(testTree.treeMap.children).not.toEqual({});
                        Object.keys(rawTreeCopy).forEach(key => {
                            testTree.treeMap.unmapChild(key);
                        });
                        expect(testTree.treeMap.children).toEqual({}); 
                    });
                });
            });

            describe("line mapping functions", function() {

                let treeMap;

                beforeEach(function() {
                    const tree = {
                        "0": {
                            object: "node",
                            name: "node0"
                        },
                        "1": {
                            object: "node",
                            name: "node1"
                        },
                        "2": {
                            object: "line",
                            name: "line2",
                            from: "node0",
                            to: "node1"
                        },
                        "3": {
                            object: "line",
                            name: "line3",
                            from: "node1",
                            to: "node0"
                        }
                    };
                    treeMap = createTreeMap(tree);
                });
                //good
                describe("mapLine()", function() {

                    describe("if the node hasn't had any line keys mapped to it yet", function() {

                        it("should set this TreeMap.lines[nodeKey] to an array containing the lineKey", function() {
                            treeMap.lines = {};
                            expect(treeMap.lines["0"]).toBeUndefined();
                            expect(treeMap.lines["1"]).toBeUndefined();
                            treeMap.mapLine("2");
                            expect(treeMap.lines["0"]).toEqual(["2"]);
                            expect(treeMap.lines["1"]).toEqual(["2"]);
                        });
                    });

                    describe("if the node has not been mapped to a particular line key", function() {

                        it("should push the line key onto the lines array of the node", function() {
                            treeMap.lines = {};
                            expect(treeMap.lines["0"]).toBeUndefined();
                            expect(treeMap.lines["1"]).toBeUndefined();
                            treeMap.mapLine("2");
                            expect(treeMap.lines["0"]).toEqual(["2"]);
                            expect(treeMap.lines["1"]).toEqual(["2"]);
                            treeMap.mapLine("3");
                            expect(treeMap.lines["0"]).toEqual(["2", "3"]);
                            expect(treeMap.lines["1"]).toEqual(["2", "3"]);
                        });
                    });

                    describe("if the node has already been mapped to a particular line key", function() {

                        it("should not push the line key onto the lines array of the node", function() {
                            treeMap.lines = {};
                            expect(treeMap.lines["0"]).toBeUndefined();
                            expect(treeMap.lines["1"]).toBeUndefined();
                            treeMap.mapLine("2");
                            expect(treeMap.lines["0"]).toEqual(["2"]);
                            expect(treeMap.lines["1"]).toEqual(["2"]);
                            treeMap.mapLine("2");
                            expect(treeMap.lines["0"]).toEqual(["2"]);
                            expect(treeMap.lines["1"]).toEqual(["2"]);
                        });
                    });

                    it("should pass an integration test that maps lines to their nodes", function() {
                        const treeMap = createTreeMap(rawTreeCopy);
                        treeMap.lines = {};
                        Object.keys(rawTreeCopy).forEach(key => {
                            treeMap.mapLine(key);
                        });
                        expect(testTree.treeMap.lines).toEqual(treeMap.lines);
                    });
                });
                //good
                describe("unmapLine()", function() {

                    describe("if the line key exists in the node's array", function() {

                        it("should remove the line key from the array", function() {
                            expect(treeMap.lines["0"]).toEqual(["2", "3"]);
                            treeMap.unmapLine("3");
                            expect(treeMap.lines["0"]).toEqual(["2"]);
                        });
                    });

                    describe("if the object is not connected to any node", function() {

                        it("should call console.error", function() {
                            expect(treeMap.lines["0"]).toEqual(["2", "3"]);
                            treeMap.unmapLine("0");
                            expect(treeMap.lines["0"]).toEqual(["2", "3"]);
                            expect(consoleErrorSpy).toHaveBeenCalled();
                        });
                    });

                    it("should pass an integration test that unmaps every line from its nodes", function() {
                        const treeMap = createTreeMap(rawTreeCopy);
                        expect(treeMap.lines).not.toEqual({});
                        Object.keys(rawTreeCopy).forEach(key => {
                            treeMap.unmapLine(key);
                        });
                        expect(treeMap.lines).toEqual({});
                    });
                });
            });
        });
        //good
        describe("createTree()", function() {

            it("should format all 'longitude' and 'latitude' property values into numbers if they are strings", function() {
                let tree = {
                    "0": {
                        object: "house",
                        longitude: "50",
                        latitude: "50"
                    },
                };
                tree = createTree(tree);
                expect(tree.tree["0"].longitude).toEqual(50);
                expect(tree.tree["0"].latitude).toEqual(50);
            });

            it("should pass an integration test that converts all 'longitude' and 'latitude' property values into numbers", function() {
                Object.keys(rawTreeCopy).forEach(key => {
                    ["longitude", "latitude"].forEach(prop => {
                        if (rawTreeCopy[key][prop] != null) {
                            expect(parseFloat(rawTreeCopy[key][prop])).toEqual(testTree.tree[key][prop]);
                        }
                    });
                });
            });
        });

        describe("treePrototype", function() {
            //good
            describe("getObject()", function() {

                it("should throw an exception if the key doesn't exist in the tree", function() {
                    const tree = createTree();
                    expect(function() {
                        tree.getObject("100");
                    }).toThrowError(`getObject() failed. The object with the key "100" does not exist in the Tree.`)
                });

                it("should return an object in the tree", function() {
                    let tree = {
                        "0": {}
                    };
                    tree = createTree(tree);
                    expect(tree.getObject("0")).toBe(tree.tree["0"]);
                });
            });
            //good
            describe("insert()", function() {

                describe("if the TreeObject does not match a corresponding tree object in the tree", function() {

                    it(`should add the data of the TreeObject argument to this Tree`, function() {
                        const map = {
                            "parent": "house172645", 
                            "name": "waterheater444555666", 
                            "object": "waterheater", 
                            "longitude": 233.258917459014, 
                            "latitude": 800.489571934734, 
                        }
                        const tree = createTree();
                        const tObj = createTreeObject(map, tree);
                        expect(Object.keys(tree.tree).length).toEqual(0);
                        tree.insert(tObj);
                        expect(Object.keys(tree.tree).length).toEqual(1);
                        expect(tree.tree["0"]).toBe(tObj.data);
                    });
                });
    
                describe(`if a tree object with an identical key to the TreeObject already exists in this TreeWrapper`, function() {

                    it(`should overwrite the tree object data with data from the TreeObject`, function() {
                        let tree = {
                            "0": {
                                object: "node",
                                name: "node0"
                            }
                        };
                        tree = createTree(tree);
                        const tObject = createTreeObject("0", tree);
                        const map = {
                            object: "house",
                            name: "house57" 
                        };
                        tObject.data = map;
                        tree.insert(tObject);
                        expect(tree.tree["0"]).toBe(tObject.data);
                    });
                });
            });
            //good
            describe("isDeletable()", function() {

                let tree;

                beforeEach(function() {
                    tree = {
                        "0": {//parent
                            object: "node",
                            name: "node0"
                        },
                        "1": {//child
                            object: "house",
                            name: "house1",
                            parent: "node0"
                        },
                        "2": {//independent node
                            object: "node",
                            name: "node2"
                        },
                        "3": {//independent node
                            object: "node",
                            name: "node3"
                        },
                        "4": {//line
                            object: "line",
                            name: "line4",
                            from: "node2",
                            to: "node3"
                        },
                        "5": {//child
                            object: "recorder",
                            name: "recorder5",
                            parent: "line4"
                        },
                        "6": {//line
                            object: "line",
                            name: "line6",
                            from: "node3",
                            to: "node2"
                        }
                    };
                    tree = createTree(tree);
                });

                it("should return false if the tree object has children", function() {
                    expect(tree.isDeletable("0")).toBe(false);
                    expect(tree.isDeletable("4")).toBe(false);
                });

                it("should return false if the tree object has connected lines", function() {
                    expect(tree.isDeletable("2")).toBe(false);
                    expect(tree.isDeletable("3")).toBe(false);
                });

                it("should return true if the tree object has neither connected lines nor children", function() {
                    expect(tree.isDeletable("1")).toBe(true);
                    expect(tree.isDeletable("6")).toBe(true);
                });
            });
            //good 
            describe("getSubtreeToDelete()", function() {

                describe("if the tree object has connected lines and/or children", function() {

                    it("it should return the keys of 1) lines that connect to this object 2) children of this object 3) children of children and any lines that connect to any children", function() { 
                        const keysToDelete = [
                            node3Line1EndChild1,
                            node3Line1EndChild2,
                            node3Line1EndChild3,
                            node3Line1,
                            funkyLine1,
                            funkyLine2,
                            node3Line1EndChild1Child1,
                            node3Line1EndChild1Child2,
                            node3Line1EndChild2Child1,
                            childOfLine,
                        ];
                        const keys = testTree.getSubtreeToDelete(node3Line1End).sort();
                        expect(keys).toEqual(keysToDelete.sort());
                    });

                    it(`should not recurse infinitely if a cycle exists in the graph`, function() {
                        let tree = {
                            "1": {
                                "parent": "node226",
                                "name": "node134", 
                                "object": "triplex_meter", 
                                "longitude": 110.54543561193137, 
                                "latitude": 650.800448635241
                            }, 
                            "2": {
                                "parent": "node134", 
                                "name": "node226", 
                                "object": "ZIPload", 
                                "longitude": 93.65197702537034, 
                                "latitude": 1011.8227442648296, 
                            },
                            "3": {
                                "name": "whatever"
                            }
                        };
                        tree = createTree(tree);
                        expect(tree.getSubtreeToDelete("1")).toEqual(["2", "1"]);
                    });
                });
            });
        });
        //good
        describe("createTreeObject()", function() {

            describe("if invoked with (key, tree) arguments", function() {

                it("should return a TreeObject with the passed key", function() {
                    let tree = {
                        1010: {
                            prop: "custom value"
                        }
                    };
                    tree = createTree(tree); 
                    const tObj = createTreeObject("1010", tree);
                    expect(tObj.key).toEqual("1010");
                });

                it("should return a TreeObject with data that is equivalent to the tree object, but not the same object", function() {
                    let tree = {
                        1010: {
                            prop: "custom value",
                            longitude: 50.1,
                            latitude: .77
                        }
                    };
                    tree = createTree(tree);
                    const tObj = createTreeObject("1010", tree);
                    expect(tObj.data).not.toBe(tree.tree[tObj.key]);
                    expect(tObj.data).toEqual(tree.tree[tObj.key]);
                });

                it("should throw an error if the key argument doesn't exist in the treeWrapper argument", function() {
                    expect(function() {
                        createTreeObject("10", createTree());
                    }).toThrowError(`getObject() failed. The object with the key "10" does not exist in the Tree.`);
                });

                it("should throw an error if the key argument is not a string", function() {
                    expect(function() {
                        createTreeObject(10, createTree());
                    }).toThrowError("TreeObject creation failed. The 'input' argument must be a string or an object."); 
                });

                it("should throw an error if the tree object has a string value stored at its 'longitude' or 'latitude' property",
                function() {
                    const tree = createTree();
                    tree.tree["0"] = {
                        object: "node",
                        longitude: "50",
                        latitude: "50"
                    }
                    expect(function() {
                        createTreeObject("0", tree);
                    }).toThrowError(`TreeObject creation failed. The tree object with key: "0" has a string value for its "longitude" property.`);
                });
            });

            describe("if invoked with (map, tree) arguments", function() {

                describe("if the map has 'longitude' and 'latitude' properties", function() {

                    it("should set the 'longitude' and 'latitude' to be numbers if they are strings", function() {
                        const map = {
                            object: "node",
                            longitude: "50",
                            latitude: "50"
                        };
                        const tObject = createTreeObject(map, createTree());
                        expect(tObject.data.longitude).toEqual(50);
                        expect(tObject.data.latitude).toEqual(50);
                    });
                });

                it("should return a TreeObject with data that is equivalent to the map, but not the same object", function() {
                    const map = {
                        prop: "cool value"
                    }
                    const tObj = createTreeObject(map, createTree());
                    expect(tObj.data).not.toBe(map);
                    expect(tObj.data).toEqual(map);
                });

                it("should return a TreeObject with a key that does not exist in the treeWrapper.tree", function() {
                    let tree = {
                        0: {}
                    };
                    tree = createTree(tree);
                    const tObj = createTreeObject({}, tree);
                    expect(tObj.key).toEqual("1");
                });

                it("should call getNewTreeKey()", function() {
                    const spy = spyOn(window, "getNewTreeKey").and.callThrough();
                    const tree = createTree();
                    expect(spy).not.toHaveBeenCalled();
                    createTreeObject({}, tree);
                    expect(spy).toHaveBeenCalled();
                });

                it(`should set the 'name' property to be a concatenation of the 'object' property and the id, if the object has the 'object' property`, function() {
                    const map = {
                        object: "Austin",
                    };
                    const tObject = createTreeObject(map, createTree());
                    expect(tObject.data.name).toEqual("Austin0");
                });
            });
        });

        describe("svgDataPrototype", function() {
            //good.
            describe("setSubtreetoRedraw()", function() {

                describe("if the an object in the primaryKeySet has children", function() {

                    it("should update the subtreeKeySet to include keys of children of nodes", function() {
                        const keys = [
                            node3Line1EndChild1,//parent
                            node3Line1EndChild1Child1,//child
                            node3Line1EndChild1Child2,//child
                            node3Line1End,//grandparent
                            node3Line1EndChild2,//sibling
                            funkyLine1//line between parent and sibling
                        ];
                        const svg = createSvgData([node3Line1EndChild1], testTree);
                        expect(Array.from(svg.primaryKeySet)).toEqual([node3Line1EndChild1]);
                        expect(Array.from(svg.subtreeKeySet)).toEqual([node3Line1EndChild1]);
                        svg.setSubtreeToRedraw();
                        expect(Array.from(svg.primaryKeySet)).toEqual([node3Line1EndChild1]);
                        const subtreeKeys = Array.from(svg.subtreeKeySet).sort();
                        expect(subtreeKeys).toEqual(keys.sort());
                    });

                    it("should update the subtreeKeySet to include keys of children of lines", function() {
                        const keys = [
                            node3Line1,//line
                            node3,//source
                            node3Line1End,//target
                            childOfLine//childOfLine
                        ];
                        const svg = createSvgData([node3Line1], testTree);
                        expect(Array.from(svg.primaryKeySet)).toEqual([node3Line1]);
                        expect(Array.from(svg.subtreeKeySet)).toEqual([node3Line1]);
                        svg.setSubtreeToRedraw();
                        expect(Array.from(svg.primaryKeySet)).toEqual([node3Line1]);
                        const subtreeKeys = Array.from(svg.subtreeKeySet).sort();
                        expect(subtreeKeys).toEqual(keys.sort());
                    });
                });

                describe("if an object in the primaryKeySet has a parent", function() {

                    it("should update the subtreeKeySet to include the key of the parent node", function() {
                        const keys = [
                            node2Line2EndChild1,//child
                            node2Line2End//parent
                        ];
                        const svg = createSvgData([node2Line2EndChild1], testTree);
                        expect(Array.from(svg.primaryKeySet)).toEqual([node2Line2EndChild1]);
                        expect(Array.from(svg.subtreeKeySet)).toEqual([node2Line2EndChild1]);
                        svg.setSubtreeToRedraw();
                        expect(Array.from(svg.primaryKeySet)).toEqual([node2Line2EndChild1]);
                        const subtreeKeys = Array.from(svg.subtreeKeySet).sort();
                        expect(subtreeKeys).toEqual(keys.sort());
                    });

                    it("should update the subtreeKeySet to include the key of a parent line, and nodes on either end of that line", function() {
                        const keys = [
                            childOfLine,//childOfLine
                            node3Line1,//line
                            node3,//source
                            node3Line1End,//target
                        ];
                        const svg = createSvgData([childOfLine], testTree);
                        expect(Array.from(svg.primaryKeySet)).toEqual([childOfLine]);
                        expect(Array.from(svg.subtreeKeySet)).toEqual([childOfLine]);
                        svg.setSubtreeToRedraw();
                        expect(Array.from(svg.primaryKeySet)).toEqual([childOfLine]);
                        const subtreeKeys = Array.from(svg.subtreeKeySet).sort();
                        expect(subtreeKeys).toEqual(keys.sort());
                    });
                });

                describe("if an object in the primaryKeySet is a line", function() {

                    it("should update the subtreeKeySet to include the nodes on either end of the line", function() {
                        const keys = [
                            lineToLoad,//line
                            node1Line2EndChild1,//source
                            node2Line2End//target
                        ];
                        const svg = createSvgData([lineToLoad], testTree);
                        expect(Array.from(svg.primaryKeySet)).toEqual([lineToLoad]);
                        expect(Array.from(svg.subtreeKeySet)).toEqual([lineToLoad]);
                        svg.setSubtreeToRedraw();
                        expect(Array.from(svg.primaryKeySet)).toEqual([lineToLoad]);
                        const subtreeKeys = Array.from(svg.subtreeKeySet).sort();
                        expect(subtreeKeys).toEqual(keys.sort());
                    });
                });

                describe("if an object in the primaryKeySet has connected lines", function() {

                    it("should update the subtreeKeySet to include those lines, the nodes on the other ends of those lines, and children of those lines", function() {
                        const keys = [
                            node3Line1End,//need to include the own object, because it is included in the subtreeKeySet
                            node3,
                            node3Line1,
                            childOfLine,
                            node3Line1EndChild1, 
                            node3Line1EndChild2, 
                            node3Line1EndChild3 
                        ];
                        const svg = createSvgData([node3Line1End], testTree);
                        expect(Array.from(svg.primaryKeySet)).toEqual([node3Line1End]);
                        expect(Array.from(svg.subtreeKeySet)).toEqual([node3Line1End]);
                        svg.setSubtreeToRedraw();
                        expect(Array.from(svg.primaryKeySet)).toEqual([node3Line1End]);
                        const subtreeKeys = Array.from(svg.subtreeKeySet).sort();
                        expect(subtreeKeys).toEqual(keys.sort());
                    });
                });
            });
            //good
            describe("createData()", function() {

                it("should only create parent-child lines for childNodes whose parent is in the subtreeKeySet", function() {
                    // This will solve the problem of updating the parent-child lines of to/from ends of primaryKeySet lines objects, which I don't want
                    const svg = createSvgData([lineToLoad], testTree);
                    svg.setSubtreeToRedraw();
                    svg.createData();
                    const circleIds = svg.circles.map(circle => circle.id).sort();
                    const lineIds = svg.lines.map(line => line.id).sort();
                    const parentChildIds = svg.parentChildLines.map(line => line.id).sort();
                    expect(circleIds).toEqual([node1Line2EndChild1, node2Line2End].sort());
                    expect(lineIds).toEqual([lineToLoad]);
                    expect(parentChildIds).toEqual([]);
                });

                it("should only create parent-child lines for childNodes whose parent is in the subtreeKeySet", function() {
                    // This will solve the problem of updating the parent-child lines of parents of primaryKeySet node objects, which I don't want
                    const svg = createSvgData([node3Line1EndChild2Child1], testTree);
                    svg.setSubtreeToRedraw();
                    svg.createData();
                    const circleIds = svg.circles.map(circle => circle.id).sort();
                    const lineIds = svg.lines.map(line => line.id).sort();
                    const parentChildIds = svg.parentChildLines.map(line => line.id).sort();
                    expect(circleIds).toEqual([node3Line1EndChild2Child1, node3Line1EndChild2].sort());
                    expect(lineIds).toEqual([]);
                    expect(parentChildIds).toEqual([`house172260_ZIPload172261`]); 
                });
            });
        });

        xdescribe("createRow()", function() {

            it("should call validateArguments()", function() {
                const spy = spyOn(rowPrototype, "validateArguments").and.callThrough();
                createRow({key: "some key"});
                expect(spy).toHaveBeenCalled();
            });
        });
        // Delete these
        xdescribe("Public treeWrapperPrototype methods", function() {
            //bad
            xdescribe("insertCoordinates()", function() {

                xdescribe("if an object does not contain 'longitude' and 'latitude' properties", function() {

                    let tree, tWrapper;
                    const distance = 101;
                    const initX = 52;
                    const initY = 53;

                    beforeEach(function() {
                        tree = {
                            "0": {},
                            "1": {},
                            "2": {},
                            "3": {},
                            "4": {},
                            "5": {},
                            "6": {}
                        };
                        //tWrapper = createTreeWrapper(tree);
                    });

                    xdescribe(`if an object has a type of "line"`, function() {

                        it("should not add coordinates", function() {
                            spyOn(window, "getType").and.returnValue("line");
                            tWrapper.insertCoordinates(initX, initY, distance);
                            const keys = Object.keys(tWrapper.tree);
                            for (let key of keys) {
                                expect(tWrapper.tree[key].longitude).toBeUndefined();
                                expect(tWrapper.tree[key].latitude).toBeUndefined();
                            }
                        });
                    });

                    xdescribe(`if an object has a type other than "line"`, function() {

                        it("should add coordinates", function() {
                            spyOn(window, "getType").and.returnValue("childNode");
                            tWrapper.insertCoordinates(initX, initY, distance);
                            const keys = Object.keys(tWrapper.tree);
                            expect(tWrapper.tree[keys[0]].longitude).toEqual(initX);
                            expect(tWrapper.tree[keys[0]].latitude).toEqual(initY);
                            expect(tWrapper.tree[keys[1]].longitude).toEqual(initX);
                            expect(tWrapper.tree[keys[1]].latitude).toEqual(initY + distance);
                            expect(tWrapper.tree[keys[2]].longitude).toEqual(initX + distance);
                            expect(tWrapper.tree[keys[2]].latitude).toEqual(initY + distance);
                            expect(tWrapper.tree[keys[3]].longitude).toEqual(initX + distance);
                            expect(tWrapper.tree[keys[3]].latitude).toEqual(initY);
                            expect(tWrapper.tree[keys[4]].longitude).toEqual(initX);
                            expect(tWrapper.tree[keys[4]].latitude).toEqual(initY + (2 * distance));
                            expect(tWrapper.tree[keys[5]].longitude).toEqual(initX + distance);
                            expect(tWrapper.tree[keys[5]].latitude).toEqual(initY + (2 * distance));
                            expect(tWrapper.tree[keys[6]].longitude).toEqual(initX + (2 * distance));
                            expect(tWrapper.tree[keys[6]].latitude).toEqual(initY + (2 * distance));
                        });
                    });
                });
            });

            xdescribe("move()", function() {

                xdescribe("if handling an object that is a line", function() {

                    it("should not add 'longitude' or 'latitude' properties to the line", function() {
                        //const tWrapper = createTreeWrapper();
                        tWrapper.add(funkyLine1, testTreeWrapper);
                        tWrapper.move({x: 113, y: 217}, {offsetX: 0, offsetY: 0});
                        expect(tWrapper.tree[funkyLine1].longitude).toBeUndefined();
                        expect(tWrapper.tree[funkyLine1].latitude).toBeUndefined();
                    });

                    it("should not modify existing 'longitude' or 'latitude' properties on the line", function() {
                        //const tWrapper = createTreeWrapper();
                        tWrapper.add(orphanLine1, testTreeWrapper);
                        expect(tWrapper.tree[orphanLine1].longitude).toBeDefined();
                        expect(tWrapper.tree[orphanLine1].latitude).toBeDefined();
                        const oldLon = tWrapper.tree[orphanLine1].longitude;
                        const oldLat = tWrapper.tree[orphanLine1].latitude;
                        tWrapper.move({x: -113, y: -217}, {offsetX: 0, offsetY: 0});
                        expect(tWrapper.tree[orphanLine1].longitude).toEqual(oldLon);
                        expect(tWrapper.tree[orphanLine1].latitude).toEqual(oldLat);
                    });
                });

                xdescribe("if handling an object that is a node", function() {

                    it(`should translate each node around the x, y arguments by 1) finding the average x,y
                    coordinates of all nodes in the tree, 2) calculating the difference between the x, y arguments and
                    the average x, y coordinates 3) and adding that difference to all nodes`, function() {
                        const offsetX = -101.8876;
                        const offsetY = -2.00033;
                        const tree = {
                            "0": {
                                longitude: "0",
                                latitude: "0"
                            },
                            "1": {
                                longitude: 5,
                                latitude: "0"
                            },
                            "2": {
                                longitude: "0",
                                latitude: 5
                            },
                            "3": {
                                longitude: 5,
                                latitude: 5
                            },
                            "4": {
                                from: "someNode",
                                to: "otherNode",
                                longitude: 1000.333,
                                latitude: NaN
                            }
                        };
                        //const tWrapper = createTreeWrapper(tree);
                        tWrapper.move({x: 117.8, y: -27.01}, {offsetX: offsetX, offsetY: offsetY});
                        expect(tWrapper.tree["0"].longitude).toEqual(115.3 + offsetX);
                        expect(tWrapper.tree["0"].latitude).toEqual(-29.51 + offsetY);
                        expect(tWrapper.tree["1"].longitude).toEqual(120.3 + offsetX);
                        expect(tWrapper.tree["1"].latitude).toEqual(-29.51 + offsetY);
                        expect(tWrapper.tree["2"].longitude).toEqual(115.3 + offsetX);
                        expect(tWrapper.tree["2"].latitude).toEqual(-24.51 + offsetY);
                        expect(tWrapper.tree["3"].longitude).toEqual(120.3 + offsetX);
                        expect(tWrapper.tree["3"].latitude).toEqual(-24.51 + offsetY);
                        expect(tWrapper.tree["4"].longitude).toEqual(1000.333);
                        expect(tWrapper.tree["4"].latitude).toEqual(NaN);
                    });
                });
            });
            //bad
            xdescribe("isValidForMove()", function() {

                let spy;

                beforeEach(function() {
                    spy = spyOn(window, "alert");
                });

                xdescribe("if there are 0 objects in this TreeWrapper.tree", function() {

                    it("should return false", function() {
                        //const emptyWrapper = createTreeWrapper();
                        expect(emptyWrapper.isValidForMove()).toBe(false);
                    });
                });

                xdescribe("if there is at least 1 line in this TreeWrapper.tree", function() {

                    let tWrapper;

                    beforeEach(function() {
                        //tWrapper = createTreeWrapper();
                        tWrapper.add(funkyLine1, testTreeWrapper);
                    });

                    it("should return false", function() {
                        expect(tWrapper.isValidForMove()).toBe(false);
                    });

                    it("should alert the user", function() {
                        const names = tWrapper.getNamesOfTypes("line");
                        tWrapper.isValidForMove();
                        expect(spy.calls.mostRecent().args[0]).toEqual(`Lines cannot be moved. Please unselect the following lines: "` + names + `"`);
                    });
                });

                it("should return true", function() {
                    const keys = Object.keys(testTreeWrapper.tree);
                    keys.forEach(key => {
                        if (getType(testTreeWrapper.tree[key]) === "line") {
                            testTreeWrapper.delete(key);
                        }
                    });
                    expect(testTreeWrapper.isValidForMove()).toBe(true);
                });
            });
            //bad
            xdescribe("isValidForAdd()", function() {

                let spy;

                beforeEach(function() {
                    spy = spyOn(window, "alert");
                });

                xdescribe("if this TreeWrapper.tree contains 0 objects", function() {

                    it("should return false", function() {
                        //const emptyWrapper = createTreeWrapper();
                        expect(emptyWrapper.isValidForAdd({})).toBe(false);
                    });
                });
                
                xdescribe("if the 'obj' argument has a type of 'independentNode' or 'configurationNode'", function() {

                    let ary;

                    beforeEach(function() {
                        ary = [
                            {
                                type: "independentNode",
                                object: {
                                    object: "something"
                                }
                            },
                            {
                                type: "configurationNode",
                                object: {}
                            }
                        ];
                        for (let i = 0; i < ary.length; i++) {
                            expect(getType(ary[i].object)).toEqual(ary[i].type);
                        }
                    });

                    it("should return false", function() {
                        for (let i = 0; i < ary.length; i++) {
                            expect(testTreeWrapper.isValidForAdd(ary[i].object)).toBe(false);
                        }
                    });

                    it("should alert the user", function() {
                        for (let i = 0; i < ary.length; i++) {
                            testTreeWrapper.isValidForAdd(ary[i].object);
                            expect(spy.calls.mostRecent().args[0]).toEqual(`This component cannot be added to another object. Please unselect all objects before adding this component again.`);
                        }
                    });
                });
                
                xdescribe("if the 'obj' argument has a type of 'childNode'", function() {
                    
                    xdescribe("if this TreeWrapper.tree contains at least 1 line", function() {

                        let tWrapper;

                        beforeEach(function() {
                            //tWrapper = createTreeWrapper();
                            expect(getType(testTreeWrapper.tree[orphanLine1])).toEqual("line");
                            tWrapper.add(orphanLine1, testTreeWrapper);
                        });
                        
                        xdescribe("if the 'obj' argument has the value 'recorder' for its 'object' property", function() {

                            it("should return true", function() {
                                const child = {
                                    parent: "dad",
                                    object: "recorder"
                                };
                                expect(getType(child)).toEqual("childNode");
                                expect(tWrapper.isValidForAdd(child)).toBe(true);
                            });
                        });
                        
                        xdescribe("if the 'obj' argument does not have the value 'recorder' for its 'object' property", function() {

                            let child;

                            beforeEach(function() {
                                child = {
                                    parent: "mom",
                                    object: "not recorder"
                                };
                                expect(getType(child)).toEqual("childNode");
                            });

                            it("should return false", function() {
                                expect(tWrapper.isValidForAdd(child)).toBe(false);
                            });

                            it("should alert the user", function() {
                                tWrapper.isValidForAdd(child);
                                const names = tWrapper.getNamesOfTypes("line");
                                expect(spy.calls.mostRecent().args[0]).toEqual(`This component cannot be added as a child of a line or a configuration node. Please unselect the following objects: "` + names + `" before adding this component again.`)
                            });
                        });
                    });
                    
                    xdescribe("if this TreeWrapper.tree contains at least 1 configuration node", function() {

                        let child, tWrapper;

                        beforeEach(function() {
                            child = {
                                parent: "George Washington"
                            };
                            expect(getType(child)).toEqual("childNode");
                            expect(getType(testTreeWrapper.tree[weirdNode1])).toEqual("configurationNode");
                            //tWrapper = createTreeWrapper();
                            tWrapper.add(weirdNode1, testTreeWrapper);
                        });

                        it("should return false", function() {
                            expect(tWrapper.isValidForAdd(child)).toBe(false);
                        });

                        it("should alert the user", function() {
                            tWrapper.isValidForAdd(child);
                            const names = tWrapper.getNamesOfTypes("configurationNode");
                            expect(spy.calls.mostRecent().args[0]).toEqual(`This component cannot be added as a child of a line or a configuration node. Please unselect the following objects: "` + names + `" before adding this component again.`)
                        });
                    });

                    it("should return true", function() {
                        //const tWrapper = createTreeWrapper();
                        expect(getType(testTreeWrapper.tree[node1])).toEqual("independentNode");
                        expect(getType(testTreeWrapper.tree[node1Line2EndChild1])).toEqual("childNode");
                        tWrapper.add(node1, testTreeWrapper);
                        tWrapper.add(node1Line2EndChild1, testTreeWrapper);
                        const child = {
                            parent: "Darth Vader"
                        };
                        expect(tWrapper.isValidForAdd(child)).toBe(true);
                    });
                });
                
                xdescribe("if the 'obj' argument has a type of 'line'", function() {

                    let line, tWrapper;

                    beforeEach(function() {
                        line = {
                            from: null,
                            to: null
                        };
                        expect(getType(line)).toEqual("line");
                        //tWrapper = createTreeWrapper();
                    });

                    xdescribe("if this TreeWrapper.tree contains less than 2 objects", function() {

                        beforeEach(function() {
                            tWrapper.add(node1, testTreeWrapper);
                        });

                        it("should return false", function() {
                            expect(tWrapper.isValidForAdd(line)).toBe(false);
                        });

                        it("should alert the user", function() {
                            tWrapper.isValidForAdd(line);
                            expect(spy.calls.mostRecent().args[0]).toEqual("Please select at least 2 circles to add this line.")
                        });
                    });

                    xdescribe("if this TreeWrapper.tree contains at least 1 line", function() {

                        beforeEach(function() {
                            expect(getType(testTreeWrapper.tree[orphanLine1])).toEqual("line");
                            expect(getType(testTreeWrapper.tree[funkyLine1])).toEqual("line");
                            tWrapper.add(orphanLine1, testTreeWrapper);
                            tWrapper.add(funkyLine1, testTreeWrapper);
                        });

                        it("should return false", function() {
                            expect(tWrapper.isValidForAdd(line)).toBe(false);
                        });
                        
                        it("should alert the user", function() {
                            tWrapper.isValidForAdd(line);
                            const names = tWrapper.getNamesOfTypes("line");
                            expect(spy.calls.mostRecent().args[0]).toEqual(`A line cannot be added to another line or a configuration node. Please unselect the following objects: "` + names + `" before adding this line again.`);
                        });
                    });

                    xdescribe("if this TreeWrapper.tree contains at least 1 configuration node", function() {

                        beforeEach(function() {
                            expect(getType(testTreeWrapper.tree[weirdNode1])).toEqual("configurationNode");
                            expect(getType(testTreeWrapper.tree[weirdNode2])).toEqual("configurationNode");
                            tWrapper.add(weirdNode1, testTreeWrapper);
                            tWrapper.add(weirdNode2, testTreeWrapper);
                        });

                        it("should return false", function() {
                            expect(tWrapper.isValidForAdd(line)).toBe(false);
                        });

                        it("should alert the user", function() {
                            tWrapper.isValidForAdd(line);
                            const names = tWrapper.getNamesOfTypes("configurationNode");
                            expect(spy.calls.mostRecent().args[0]).toEqual(`A line cannot be added to another line or a configuration node. Please unselect the following objects: "` + names + `" before adding this line again.`);
                        });
                    });

                    it("should return true", function() {
                        expect(getType(testTreeWrapper.tree[node1])).toEqual("independentNode");
                        expect(getType(testTreeWrapper.tree[node1Line3EndChild1])).toEqual("childNode");
                        tWrapper.add(node1, testTreeWrapper);
                        tWrapper.add(node1Line3EndChild1, testTreeWrapper);
                        expect(tWrapper.isValidForAdd(line)).toBe(true);
                    });
                });
            });
        });
        //incomplete
        xdescribe("selectionPrototype", function() {

            xdescribe("remove()", function() {

                xdescribe(`if there are 0 HTMLElements in this selection that 1) are equal in identify to the HTMLElement 
                argument or 2) have the same id as the HTMLElement argument`, function() {

                    it("should throw an error", function() {
                        const selection = createSelection();
                        const table = document.createElement("table");
                        expect(function() {
                            selection.remove(table)
                        }).toThrowError();
                    });
                });

                xdescribe(`if there are 1 or more HTMLElements in this selection that 1) are equal in identify to the 
                HTMLElement argument or 2) have the same id as the HTMLElement argument`, function() {

                    it("should delete all matching HTMLElements from this selection", function() {
                        const selection = createSelection();
                        const table = document.createElement("table");
                        table.id = "item";
                        selection.add(table);
                        const div = document.createElement("div");
                        div.id = "item";
                        selection.add(div);
                        expect(selection.selectedElements.includes(table)).toBe(true);
                        expect(selection.selectedElements.includes(div)).toBe(true);
                        selection.remove(table);
                        expect(selection.selectedElements.length).toEqual(0);
                    });
                });
            });
        });

        describe("Public utility methods", function() {
            //good
            describe("isNumberString()", function() {

                describe("if the 'str' argument is a string that can be parsed to a valid decimal or floating point number",
                function() {

                    it("should return true", function() {
                        const valid = [
                            "1",
                            "1.001",
                            "0.12"
                        ];
                        valid.forEach(num => {
                            expect(isNumberString(num)).toBe(true);
                        });
                    });
                });

                describe("if the 'str' argument is not a string", function() {

                    it("should return false", function() {
                        const invalid = [
                            false,
                            true,
                            null,
                            undefined,
                            Infinity,
                            NaN,
                            0,
                            1
                        ];
                        invalid.forEach(num => {
                            expect(isNumberString(num)).toBe(false);
                        });
                    });
                });

                describe("if the 'str' argument contains whitespace", function() {

                    it("should return false", function() {
                        const invalid = [
                            "1  ",
                            "  1",
                            " 1 "
                        ];
                        invalid.forEach(num => {
                            expect(isNumberString(num)).toBe(false);
                        });
                    });
                });

                describe("if the 'str' argument is a string that cannot be parsed to a valid, finite number", function() {

                    it("should return false", function() {
                        const invalid = [
                            "",
                            " ",
                            "true",
                            "1.2.3",
                            "1-2-3"
                        ];
                        invalid.forEach(num => {
                            expect(isNumberString(num)).toBe(false);
                        });
                    });
                });
            });
            //good
            describe("deepCopy()", function() {

                it("should throw an error if the object being copied contains a method", function() {
                    const obj = {
                        prop1: "a",
                        prop2: function() {}
                    };
                    expect(function() {
                        deepCopy(obj);
                    }).toThrowError();
                });
    
                it("should throw an error if the object being copied was created with a constructor function", function() {
                    function myObj() {
                        this.prop = 5;
                    }
                    const obj = new myObj();
                    expect(function() {
                        deepCopy(obj);
                    }).toThrowError();
                });
    
                it("should throw an error if the argument object has an undefined value", function() {
                    const obj = {
                        foo: undefined,
                        bar: 2
                    };
                    expect(function() {
                        deepCopy(obj)
                    }).toThrowError();
                });
    
                it("should produce a deep copy of a basic object", function() {
                    const obj1 = {
                        prop1: "a",
                        prop2: {
                            prop1: 123,
                            prop2: {
                                prop1: true,
                                prop2: ["10", 11, false]
                            }
                        }
                    };
                    expect(deepCopy(obj1)).toEqual(obj1);
                    expect(deepCopy(obj1)).not.toBe(obj1);
                });
            });
            //good
            describe("getNewTreeKey()", function() {

                it(`should return a string that is a valid number`, function() {
                    const key1 = getNewTreeKey({});
                    expect(isNumberString(key1)).toBe(true);
                });
    
                it("should return a key that doesn't exist in the passed tree argument", function() {
                    const key1 = getNewTreeKey({});
                    expect(key1).toEqual("0");
                    const key2 = getNewTreeKey(testTree.tree);
                    expect(key2).toEqual(Object.keys(testTree.tree).length.toString());
                });
            });
            //good
            describe("getType()", function() {
                // This should basically never happen, but you never know
                describe("if the object argument is a line and a configuration node", function() {
    
                    it("should return 'line'", function() {
                        spyOn(window, "isLine").and.returnValue(true);
                        spyOn(window, "isChildNode").and.returnValue(false);
                        spyOn(window, "isConfigurationNode").and.returnValue(true);
                        expect(getType({})).toEqual("line");
                    });
                });
                // This should also never happen
                describe("if the object argument is a child node and a configuration node", function() {
    
                    it("should return 'configurationNode'", function() {
                        spyOn(window, "isLine").and.returnValue(false);
                        spyOn(window, "isChildNode").and.returnValue(true);
                        spyOn(window, "isConfigurationNode").and.returnValue(true);
                        expect(getType({})).toEqual("configurationNode");
                    });
                });
    
                describe("if the object is not a line, nor a child node, nor a configuration node", function() {

                    it("should return 'independentNode'", function() {
                        spyOn(window, "isLine").and.returnValue(false);
                        spyOn(window, "isChildNode").and.returnValue(false);
                        spyOn(window, "isConfigurationNode").and.returnValue(false);
                        expect(getType({})).toEqual("independentNode");
                    });
                });
            });
        });
    });
    //I shouldn't be testing these, except in cases where I should
    describe("Private functions and methods", function() {

        xdescribe("Private rowPrototype methods", function() {

            let map;

            beforeEach(function() {
                //table = document.createElement("table");
                map = {
                    "schedule_skew": "349",
                    "fixed value": "permanent"
                };
            });

            xdescribe("validateArguments()", function() {

                it("should throw an error if args.key, args.value, and args.map are all defined", function() {
                    expect(function() {
                        createRow({key: "some key", value: "some value", map: map});
                    }).toThrowError();
                });

                xdescribe("if args.key and args.map are defined", function() {

                    it("should throw an error if args.key doesn't exist in args.map and args.key is not an empty string", function() {
                        expect(function() {
                            createRow({key: " ", map: map});
                        }).toThrowError();
                    });

                    it("should not throw an error if args.key doesn't exist in args.map and args.key is an empty string", function() {
                        expect(function() {
                            createRow({key: "", map: map});
                        }).not.toThrowError();
                    });
                });

                it("should throw an error if args.key is an empty string and args.map is not defined", function() {
                    expect(function() {
                        createRow({key:""});
                    }).toThrowError();
                });
            });

            xdescribe("validateNewKey()", function() {

                it("should return false if the key argument matches an existing key in the map (i.e. no duplicate keys allowed)",
                function() {
                    const newKey = "schedule_skew";
                    const row = createRow({map: map, key: "schedule_skew"});
                    expect(row.validateNewKey(newKey)).toBe(false);
                });

                it("should return false if the key argument is an empty string", function() {
                    const newKey = "";
                    const map = {
                        "schedule_skew": 520,
                    };
                    const row = createRow({map: map, key: "schedule_skew"});
                    expect(row.validateNewKey(newKey)).toBe(false);
                });

                it("should return true if the key argument does NOT already exist in the map", function() {
                    const newKey = "new key";
                    const row = createRow({map: map, key: "schedule_skew"});
                    expect(row.validateNewKey(newKey)).toBe(true);
                });
            });

            xdescribe("validateCurrentKey()", function() {

                it("should return false if the current key is an empty string", function() {
                    const row = createRow({map: map, key: ""});
                    expect(row.validateCurrentKey()).toBe(false);
                });
            });

            xdescribe("updateMapKey()", function() {

                xdescribe("if the value of the input element argument is a valid key for this row", function() {

                    let row;
                    let input;

                    beforeEach(function() {
                        spyOn(rowPrototype, "validateNewKey").and.returnValue(true);
                        row = createRow({map: map, key: "schedule_skew"});
                        input = document.createElement("input");
                        input.value = "new valid key";
                    });

                    it("should remove leading and ending whitespace from the new key", function() {
                        const key = "   key with spaces   ";
                        input.value = key;
                        row.updateMapKey(input);
                        expect(row.key).toEqual("key with spaces");
                    });

                    it("should replace the key of this row with the textContent of the input argument", function() {
                        expect(row.key).toEqual("schedule_skew");
                        row.updateMapKey(input);
                        expect(row.key).toEqual("new valid key");
                    });

                    it("should replace the old key with the new key in the map of this row", function() {
                        expect(row.map["schedule_skew"]).toBeDefined();
                        expect(row.map["new valid key"]).toBeUndefined();
                        row.updateMapKey(input);
                        expect(row.map["schedule_skew"]).toBeUndefined();
                        expect(row.map["new valid key"]).toBeDefined();
                    });
                });

                xdescribe(`if this row previously had a key of "" that didn't exist in the map because it represented an
                attribute that hadn't been added to the map yet`, function() {

                    it(`should set this.map[<new key>] === "", even though technically it should
                    be undefined, since (this.map[""] === undefined && this.map[<new key>] === this.map[""])`, function() {
                        const row = createRow({map: map, key: ""});
                        const input = document.createElement("input");
                        input.value = "new key";
                        row.updateMapKey(input);
                        expect(row.map["new key"]).toEqual("");
                    });
                });

                xdescribe("if the textContent of the input element argument is not a valid key for this row", function() {

                    it("should set the value of the input element argument to be the key of this row", function() {
                        spyOn(window, "alert");
                        spyOn(rowPrototype, "validateNewKey").and.returnValue(false);
                        const row = createRow({map: map, key: "schedule_skew"});
                        const input = document.createElement("input");
                        input.value = "invalid key";
                        row.updateMapKey(input);
                        expect(input.value).toEqual("schedule_skew");
                    });

                    it("should call alert()", function() {
                        spyOn(rowPrototype, "validateNewKey").and.returnValue(false);
                        const spy = spyOn(window, "alert");
                        const row = createRow({map: map, key: "schedule_skew"});
                        const input = document.createElement("input");
                        input.value = "invalid key";
                        row.updateMapKey(input);
                        expect(spy).toHaveBeenCalled();
                    });
                });
            });

            xdescribe("getKeyElement()", function() {

                xdescribe("if the key is not an empty string", function() {

                    it(`should return an HTMLTableCellElement with textContent equal to this row.key`, function() {
                        const row = createRow({map: map, key: "schedule_skew"});
                        const td = row.getKeyElement();
                        expect(td instanceof HTMLTableCellElement).toBe(true);
                        expect(td.textContent).toEqual("schedule_skew");
                    });

                    it("should return an HTMLTableCellElement with 0 children", function() {
                        const row = createRow({map: map, key: "schedule_skew"});
                        const td = row.getKeyElement();
                        expect(td.children.length).toEqual(0);
                    });
                });

                xdescribe("if the key is an empty string", function() {

                    it(`should return an HTMLTableCellElement with 1 child that is an HTMLInputElement
                    which has its 'required' and 'pattern' attributes set `, function() {
                        const row = createRow({map: map, key: ""});
                        const td = row.getKeyElement();
                        const input = td.children[0];
                        expect(td instanceof HTMLTableCellElement).toBe(true);
                        expect(td.children.length).toEqual(1);
                        expect(input instanceof HTMLInputElement).toBe(true);
                        expect(input.required).toBeDefined();
                        expect(input.pattern).toBeDefined();
                    });
                });
            });

            xdescribe("validateNewValue()", function() {

                xdescribe("if the key is either 'longitude' or 'latitude'", function() {

                    it("should return false if the value argument is not a valid number", function() {
                        expect(true).toEqual(false);
                    });
                });
            });

            xdescribe("updateMapValue()", function() {

                it("should remove leading and trailing whitespace from the value", function() {
                    const row = createRow({map: map, key: "schedule_skew"});
                    const input = document.createElement("input");
                    input.value = "   value with whitespace         ";
                    row.updateMapValue(input);
                    expect(row.map["schedule_skew"]).toEqual("value with whitespace");
                });

                xdescribe("if the current key is invalid regardless of the value", function() {

                    let row, input, spy;

                    beforeEach(function() {
                        spyOn(window, "alert");
                        spy = spyOn(rowPrototype, "validateCurrentKey").and.returnValue(false);
                        row = createRow({map: map, key: "schedule_skew"});
                        input = document.createElement("input");
                        input.value = "ok";
                    });

                    it("should not update the map value", function() {
                        row.updateMapValue(input);
                        expect(row.map["key"]).toBeUndefined();
                    });

                    it("should call validateCurrentKey()", function() {
                        row.updateMapValue(input);
                        expect(spy).toHaveBeenCalled();
                    });

                    it("should set the value of the input to be an empty string", function() {
                        row.updateMapValue(input);
                        expect(input.value).toEqual("");
                    });
                });
            });

            xdescribe("getValueElement()", function() {

                const nonModifiableProperties = ["fixed value"];

                xdescribe("if this row has a key and a value but no map", function() {

                    xdescribe("if this row.value is a string", function() {

                        it("should return an HTMLTableCellElement with textContent equal to this row.value", function() {
                            const row = createRow({key: "some key", value: "some value"});
                            const td = row.getValueElement(nonModifiableProperties)
                            expect(td instanceof HTMLTableCellElement).toBe(true);
                            expect(td.textContent).toEqual("some value");
                            expect(td.children.length).toEqual(0);
                        });

                        it("should return an HTMLTableCellElement with 0 children", function() {
                            const row = createRow({key: "some key", value: "some value"});
                            const td = row.getValueElement(nonModifiableProperties)
                            expect(td instanceof HTMLTableCellElement).toBe(true);
                            expect(td.children.length).toEqual(0);
                        });
                    });

                    xdescribe("if this row.value is an HTMLElement", function() {

                        it("should return an HTMLTableCellElement with 1 child that is this row.value", function() {
                            const button = document.createElement("button");
                            const row = createRow({key: "some key", value: button});
                            const td = row.getValueElement(nonModifiableProperties)
                            expect(td instanceof HTMLTableCellElement).toBe(true);
                            expect(td.children.length).toEqual(1);
                            expect(td.children[0]).toBe(button);
                        });
                    });
                });

                xdescribe("if this row has a key and a map but no value", function() {

                    xdescribe("if this row.map[row.key] is not in the nonModifiableProperties array", function() {

                        it(`should return an HTMLTableCellElement with 1 child that is an HTMLInputElement whose
                        value equals this row.map[row.key]`, function() {
                            const row = createRow({key: "schedule_skew", map: map});
                            const td = row.getValueElement(nonModifiableProperties);
                            const input = td.children[0];
                            expect(td instanceof HTMLTableCellElement).toBe(true);
                            expect(td.children.length).toEqual(1);
                            expect(input instanceof HTMLInputElement).toBe(true);
                            expect(input.value).toEqual("349");
                        });
                    });

                    xdescribe("if this row.map[row.key] is in the nonModifiableProperties array", function() {

                        it(`should return an HTMLTableCellElement with textContent equal to this row.map[row.key]`, function() {
                            const row = createRow({key: "fixed value", map: map});
                            const td = row.getValueElement(nonModifiableProperties);
                            expect(td instanceof HTMLTableCellElement).toBe(true);
                            expect(td.textContent).toEqual("permanent");
                        });

                        it("should return an HTMLTableCellElement with 0 children", function() {
                            const row = createRow({key: "fixed value", map: map});
                            const td = row.getValueElement(nonModifiableProperties);
                            expect(td instanceof HTMLTableCellElement).toBe(true);
                            expect(td.children.length).toEqual(0);
                        });
                    });
                });

                xdescribe("if this row has a key, but no value or map", function() {

                    it("should return an HTMLTableCellElement with textContent equal to an empty string", function() {
                        const row = createRow({key: "some key"});
                        const td = row.getValueElement(nonModifiableProperties);
                        expect(td instanceof HTMLTableCellElement).toBe(true);
                        expect(td.textContent).toEqual("");
                    });

                    it("should return an HTMLTableCellElement with no children", function() {
                        const row = createRow({key: "some key"});
                        const td = row.getValueElement(nonModifiableProperties);
                        expect(td instanceof HTMLTableCellElement).toBe(true);
                        expect(td.children.length).toEqual(0);
                    });
                });
            });

            xdescribe("delete()", function() {

                xdescribe("if this row has a map", function() {

                    it("should delete the key of this row from the map", function() {
                        const row = createRow({map: map, key: "schedule_skew"});
                        const table = document.createElement("table");
                        table.append(row.self);
                        expect(row.map[row.key]).toBeDefined();
                        row.delete();
                        expect(row.map[row.key]).toBeUndefined();
                    });

                    it("should remove the self HTMLTableRowElement of the row from its parent", function() {
                        const row = createRow({map: map, key: "schedule_skew"});
                        const table = document.createElement("table");
                        table.append(row.self);
                        expect(table.children.length).toEqual(1);
                        row.delete();
                        expect(table.children.length).toEqual(0);
                    });
                });

                xdescribe("if this row does not have a map", function() {

                    it("should remove the self HTMLTableRowElement of the row from its parent", function() {
                        const row = createRow({key: "key"});
                        const table = document.createElement("table");
                        table.append(row.self);
                        expect(table.children.length).toEqual(1);
                        row.delete();
                        expect(table.children.length).toEqual(0);
                    });
                });
            });
        });

        xdescribe("Private buttonPrototype methods", function() {

            //xdescribe("saveObject", function() {

            //    it("should update the TreeWrapper of this button with the value of the TreeObject of this button", function() {
            //        const tObject = createTreeObject(node3Line1EndChild1Child1, testTreeWrapper);
            //        tObject.data = {foo: "bar"};
            //        const button = createButton({action: "save", tObject: tObject, tWrapper: testTreeWrapper});
            //        expect(button.tWrapper.tree[node3Line1EndChild1Child1]).not.toBe(tObject.data);
            //        button.saveObject();
            //        expect(button.tWrapper.tree[node3Line1EndChild1Child1]).toBe(tObject.data);
            //    });

            //    it("should update the svg", function() {
            //        const spy1 = spyOn(window, "createAddableSvgData").and.callThrough();
            //        const spy2 = spyOn(addableSvgDataPrototype, "redrawTo"); 
            //        const tObject = createTreeObject({}, testTreeWrapper);
            //        const button = createButton({action: "save", tObject: tObject, tWrapper: testTreeWrapper});
            //        button.saveObject();
            //        expect(spy1).toHaveBeenCalled();
            //        expect(spy2).toHaveBeenCalled();
            //    });
            //});

            xdescribe("deleteObject()", function() {

                it("should delete the TreeObject of this button from the TreeWrapper of this button", function() {
                    const tObject = createTreeObject(node3Line1EndChild2Child1, testTreeWrapper);
                    const button = createButton({action: "delete", tObject: tObject, tWrapper: testTreeWrapper, tableBody: {}});
                    expect(testTreeWrapper.tree[node3Line1EndChild2Child1]).toBeDefined();
                    button.deleteObject();
                    expect(testTreeWrapper.tree[node3Line1EndChild2Child1]).toBeUndefined();
                });

                it("should remove the corresponding TreeObject from the svg", function() {
                    const spy1 = spyOn(window, "createDeletableSvgData").and.callThrough();
                    const spy2 = spyOn(deletableSvgDataPrototype, "deleteFrom");
                    const tObject = createTreeObject(node3Line1EndChild2Child1, testTreeWrapper);
                    const button = createButton({action: "delete", tObject: tObject, tWrapper: testTreeWrapper, tableBody: {}});
                    button.deleteObject();
                    expect(spy1).toHaveBeenCalled();
                    expect(spy2).toHaveBeenCalled();
                });
            });
        });

        xdescribe("Private utility methods", function() {
            //bad
            xdescribe("isLine()", function() {

                xdescribe("if the object argument has an undefined 'from' property", function() {

                    it("should return false", function() {
                        const fakeLine = {
                            from: undefined,
                            to: "some node"
                        };
                        expect(isLine(fakeLine)).toBe(false);
                    });
                });

                xdescribe("if the object argument has an undefined 'to' property", function() {

                    it("should return false", function() {
                        const fakeLine = {
                            from: "some node",
                            to: undefined
                        };
                        expect(isLine(fakeLine)).toBe(false);
                    });
                });

                xdescribe("if the object argument has a null 'from' property value", function() {

                    it("should return true", function() {
                        const line = {
                            from: null,
                            to: "some node"
                        };
                        expect(isLine(line)).toBe(true);
                    });
                });

                xdescribe("if the object argument has a null 'to' property value", function() {

                    it("should return true", function() {
                        const line = {
                            from: "some node",
                            to: null
                        };
                        expect(isLine(line)).toBe(true);
                    });
                });

                xdescribe("if the object argument has a non-null, defined 'from' property value", function(){

                    it("should return true", function() {
                        const line = {
                            from: "some node",
                            to: null
                        };
                        expect(isLine(line)).toBe(true);
                    });
                });

                xdescribe("the object argument has a non-null, defined 'to' property value", function() {

                    it("should return true", function() {
                        const line = {
                            from: null,
                            to: "some node"
                        };
                        expect(isLine(line)).toBe(true);
                    });
                });
            });
            //bad 
            xdescribe("isConfigurationNode()", function() {
    
                xdescribe("if the object argument has an undefined 'object' property", function() {
    
                    it("should return true", function() {
                        expect(isConfigurationNode({})).toBe(true);
                    });
                });

                xdescribe("if the object argument has a null 'object' property value", function() {

                    it("should return true", function() {
                        const configurationNode = {
                            object: null
                        };
                        expect(isConfigurationNode(configurationNode)).toBe(true);
                    });
                });
    
                xdescribe("if the argument object has non-null, defined 'object' property", function() {
    
                    xdescribe("if the 'object' property value  exists in the 'configurationTypes' global array", function() {
    
                        it("should return true", function() {
                            expect(configurationTypes).toBeDefined();
                            configurationTypes.forEach(type => {
                                expect(isConfigurationNode({object: type})).toBe(true);
                            });
                        });
                    });
    
                    xdescribe("if the 'object' property value does not exist in the global 'configurationTypes' array", function() {
    
                        it("should return false", function() {
                            expect(isConfigurationNode({object: "some other type"})).toBe(false);
                        });
                    });
                });
            });
            //bad
            xdescribe("isChildNode()", function() {

                xdescribe("if the object argument has a null value for the 'parent' property", function() {

                    it("should return true", function() {
                        const childNode = {
                            parent: null
                        };
                        expect(isChildNode(childNode)).toBe(true);
                    });
                });

                xdescribe("if the object argument has an undefined 'parent' property", function() {

                    it("should return false", function() {
                        const fakeChildNode = {
                            parent: undefined
                        };
                        expect(isChildNode(fakeChildNode)).toBe(false);
                    });
                });

                xdescribe("if the object argument has a non-null, defined 'parent' property", function() {

                    it("should return true", function() {
                        const childNode = {
                            parent: "dad"
                        };
                        expect(isChildNode(childNode)).toBe(true);
                    });
                });
            });

            xdescribe("getCoordinates()", function() {
                
                it("should return a generator", function() {

                });
            });
        });
    });
});// Unit tests

//Run each test inside this block one at a time, i.e. uncomment one it() function at a time and only run one describe block at a time
xdescribe("Integration tests that require the environment to be prepared correctly and that should be run one at a time", function() {

        let originalTimeout;
        beforeEach(function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
        });
    
        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

//    xdescribe("loadFeeder()", function() {
//
//        xit("should have its underlying XMLHttpRequest be opened properly before sending", async function() {
//            const spy = spyOn(XMLHttpRequest.prototype, "send").and.callThrough();
//            const spy2 = spyOn(Ajax.prototype, "send").and.callThrough();
//            await loadFeeder("ABEC Columbia", "publicFeeders", "public");
//
//            console.log("Ajax send was called: " + spy2.calls.count());
//            console.log("xmlhttprequest send was called: " + spy.calls.count());
//            console.log(spy.calls.all());
//        });
//
//        xit("should have its checkFileExists FileOperation resolve successfully", async function() {
//            const spy = spyOn(Promise.prototype, "then").and.callThrough();
//            await loadFeeder("ABEC Columbia", "publicFeeders", "public");
//
//            console.log(spy.calls.all());
//            //console.log("count was: " + spy.calls.count());
//            //expect()
//        });
//
//        xit("should show a sensible error message to the user in case an unrecoverable error occurs", function() {
//
//        });
//
//        xit("should call saveFeeder if something goes wrong")
//    });

    xdescribe("saveFeeder()", function() {

        xdescribe("if not cancelled", function() {

            xit("should send 1 XMLHttpRequest that receives a successful server response", async function() {
                spyOn(window, "reloadWrapper");
                const spy = spyOn(Promise.prototype, "then").and.callThrough();
                await saveFeeder();
                spy.calls.first().object.then(function(xhr) {
                    console.log(xhr);
                    expect(xhr.readyState).toEqual(4);
                    expect(xhr.status >= 200 && xhr.status < 400).toBeTruthy();
                    expect(xhr.responseURL).not.toEqual("");
                });
            });

            xit("should refresh the browser", async function() {
                const spy = spyOn(window, "reloadWrapper");
                await saveFeeder();
                expect(spy).toHaveBeenCalled();
            });

            /** Send the writeFeeder because we overwrite the server's .omd file with the new writes that the user has made.
             */
            xit("should send writeFeeder to the server in the first ajax request", async function() {
                spyOn(window, "reloadWrapper");
                const spy = spyOn(XMLHttpRequest.prototype, "send").and.callThrough();
                /** Modify the writeFeeder, but not the readFeeder. */
                writeFeeder["TestingKey"] = { prop: "testing object"};
                await saveFeeder();
                const feeder = JSON.parse(spy.calls.first().args[0].get("feederObjectJson"));
                expect(feeder).toEqual(writeFeeder);
                expect(feeder).not.toEqual(readFeeder);
            });
        });
    });

    xdescribe("submitForm()", function() {

        xdescribe("if submitting the blankFeeder form", function() {

            xdescribe("if not canceled", function() {

                //it("should send 2 XMLHttpRequests that receive successful responses from the server", async function() {
                //    spyOn(window, "reloadWrapper");
                //    const spy = spyOn(Promise.prototype, "then").and.callThrough();
                //    document.getElementById("blankFeederInput").value = "Test file name";
                //    await submitForm("blankFeederInput", "blankFeederForm");

                //    //console.log(spy.calls.all());
                //    //expect(spy.calls.count()).toEqual(3);

                //    let requests = 0;
                //    for (let i = 0; i <= 2; i++) {
                //        const promise = spy.calls.all()[i].object;
                //        console.log(promise);
                //        promise.then(function(xhr) {
                //            //console.log(xhr);
                //            if (xhr instanceof XMLHttpRequest) {
                //                requests++;
                //            }
                //        });
                //    }
                //    return expect(requests).toEqual(2);

                //    /*for (let i = 0; i <= 2; i++) {
                //        if (i == 0 || i == 2) {
                //            spy.calls.all()[i].object.then(function(xhr) {
                //                console.log(xhr);
                //                expect(xhr.readyState).toEqual(4);
                //                expect(xhr.status >= 200 && xhr.status < 400).toBeTruthy();
                //                expect(xhr.responseURL).not.toEqual("");
                //            });
                //        } 
                //    }*/
                //});

                xit("should refresh the browser", async function() {
                    const spy = spyOn(window, "reloadWrapper");
                    document.getElementById("blankFeederInput").value = "Test file name";
                    await submitForm("blankFeederInput", "blankFeederForm");
                    expect(spy).toHaveBeenCalled();
                });
            });
        });

        xdescribe("if submitting milsoft form", function() {

            describe ("if not canceled", function() {

            });
        });

        xdescribe("if submitting gridlab form", function() {

            xdescribe("if not canceled", function() {

            });
        });

        xdescribe("if submitting cyme form", function() {

            xdescribe("if not canceled", function() {

            });
        });
    });
});
/* This is used to display the jasmine reporter.
 */
setTimeout(
    function() {
        const jasmineDiv = document.getElementsByClassName("jasmine_html-reporter")[0];
        jasmineDiv.style.margin = "0px";
        jasmineDiv.style.position = "relative";
        jasmineDiv.style["z-index"] = 1;
        document.body.prepend(jasmineDiv);
        // Replace the real tree with the testing tree
        createSvgData(Object.keys(gTree.tree), gTree).delete(gViewport);
        insertCoordinates(Object.values(testTree.tree), 0, 0, 5);
        const svg = createSvgData(Object.keys(testTree.tree), testTree);
        svg.quickDraw(gViewport);
        // Hack
        gTree = testTree;
    },
    2000
);
//</script>