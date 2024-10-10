function plate_extrude_2_outline_fn(){
    return new CSG.Path2D([[203.3562685,-60.673179],[188.2947478,-42.7595625]]).appendArc([187.0736265,-41.8894557],{"radius":3,"clockwise":false,"large":false}).appendPoint([167.1216706,-34.2306173]).appendArc([165.8578399,-34.0373008],{"radius":3,"clockwise":false,"large":false}).appendPoint([139.103184,-35.7237464]).appendArc([138.5510304,-35.8107273],{"radius":3,"clockwise":false,"large":false}).appendPoint([111.7630457,-42.6377542]).appendArc([111.3043421,-42.7951041],{"radius":3,"clockwise":false,"large":false}).appendPoint([90.4004162,-51.9145584]).appendArc([88.6,-54.6642854],{"radius":3,"clockwise":false,"large":false}).appendPoint([88.6,-93.2630506]).appendArc([90.6820585,-96.1191639],{"radius":3,"clockwise":false,"large":false}).appendPoint([106.0904745,-101.0713571]).appendArc([106.7469488,-101.2038279],{"radius":3,"clockwise":false,"large":false}).appendPoint([127.7844803,-103.0443734]).appendArc([129.9283816,-104.2401377],{"radius":3,"clockwise":true,"large":false}).appendPoint([142.9096989,-121.6567525]).appendArc([144.1806666,-122.6411858],{"radius":3,"clockwise":false,"large":false}).appendPoint([159.6879778,-128.9753254]).appendArc([160.5694417,-129.5308023],{"radius":3,"clockwise":true,"large":false}).appendPoint([173.2012756,-140.9919333]).appendArc([173.8395964,-141.8153891],{"radius":3,"clockwise":true,"large":false}).appendPoint([181.7672172,-156.8629957]).appendArc([182.0965975,-157.9477305],{"radius":3,"clockwise":true,"large":false}).appendPoint([184.6285678,-182.0378189]).appendArc([187.925719,-184.7077991],{"radius":3,"clockwise":false,"large":false}).appendPoint([204.6336868,-182.9517209]).appendArc([207.303667,-179.6545697],{"radius":3,"clockwise":false,"large":false}).appendPoint([204.7259927,-155.1296372]).appendArc([204.6838304,-154.8531839],{"radius":3,"clockwise":false,"large":false}).appendPoint([204.1562859,-152.2233199]).appendArc([203.9112646,-151.4982453],{"radius":3,"clockwise":false,"large":false}).appendPoint([194.1469013,-131.4783337]).appendArc([194.0127292,-131.2329729],{"radius":3,"clockwise":false,"large":false}).appendPoint([193.3957602,-130.2199447]).appendArc([193.4379464,-127.0317484],{"radius":3,"clockwise":true,"large":false}).appendPoint([200.6107863,-115.926827]).appendArc([204.35102,-114.8139129],{"radius":3,"clockwise":true,"large":false}).appendPoint([219.3618228,-121.4971528]).appendArc([223.322669,-119.9767262],{"radius":3,"clockwise":false,"large":false}).appendPoint([237.7618198,-87.5458624]).appendArc([236.2413932,-83.5850162],{"radius":3,"clockwise":false,"large":false}).appendPoint([215.3924727,-74.3024787]).appendArc([214.3324728,-73.5113662],{"radius":3,"clockwise":true,"large":false}).appendPoint([203.372284,-60.6920684]).appendArc([203.3562684,-60.673179],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = plate_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        