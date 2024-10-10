function case_plate_extrude_2_outline_fn(){
    return new CSG.Path2D([[205.4337766,-57.2150807],[190.6906373,-39.7867204]]).appendArc([188.2600172,-38.0602884],{"radius":6,"clockwise":false,"large":false}).appendPoint([169.1456048,-30.7229529]).appendArc([166.6595623,-30.3338417],{"radius":6,"clockwise":false,"large":false}).appendPoint([140.2811098,-31.8126282]).appendArc([139.17997,-31.9778377],{"radius":6,"clockwise":false,"large":false}).appendPoint([112.3787932,-38.5890107]).appendArc([111.4017771,-38.9214315],{"radius":6,"clockwise":false,"large":false}).appendPoint([88.1860091,-49.1240577]).appendArc([84.6,-54.6170212],{"radius":6,"clockwise":false,"large":false}).appendPoint([84.6,-93.2298389]).appendArc([88.5717167,-98.8766138],{"radius":6,"clockwise":false,"large":false}).appendPoint([105.3313685,-104.8965677]).appendArc([106.8367177,-105.226961],{"radius":6,"clockwise":false,"large":false}).appendPoint([125.0873117,-106.8236811]).appendArc([129.3873832,-109.2317296],{"radius":6,"clockwise":true,"large":false}).appendPoint([140.7494993,-124.5855311]).appendArc([143.3980528,-126.608527],{"radius":6,"clockwise":false,"large":false}).appendPoint([156.4130079,-131.6692954]).appendArc([158.194489,-132.750248],{"radius":6,"clockwise":true,"large":false}).appendPoint([169.202419,-142.4033317]).appendArc([170.5067555,-144.0283968],{"radius":6,"clockwise":true,"large":false}).appendPoint([177.477498,-156.7334354]).appendArc([178.1843595,-158.9923624],{"radius":6,"clockwise":true,"large":false}).appendPoint([180.7865798,-183.7508333]).appendArc([187.5741878,-189.0672991],{"radius":6,"clockwise":false,"large":false}).appendPoint([206.2073963,-186.4951182]).appendArc([211.3540509,-179.9243105],{"radius":6,"clockwise":false,"large":false}).appendPoint([208.6894487,-154.572313]).appendPoint([207.6755774,-150.0915423]).appendPoint([197.6807152,-129.599038]).appendPoint([198.0728334,-128.5138886]).appendPoint([201.2622262,-123.4486336]).appendArc([208.7799712,-121.164354],{"radius":6,"clockwise":true,"large":false}).appendPoint([218.6484218,-125.5580714]).appendArc([226.5701142,-122.517218],{"radius":6,"clockwise":false,"large":false}).appendPoint([241.8227384,-88.2592633]).appendArc([238.781885,-80.3375709],{"radius":6,"clockwise":false,"large":false}).appendPoint([217.6750787,-70.9402153]).appendArc([215.5064291,-69.300359],{"radius":6,"clockwise":true,"large":false}).appendPoint([205.4620181,-57.2487148]).appendArc([205.4337767,-57.2150806],{"radius":6,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function bottom_outer_case_fn() {
                    

                // creating part 0 of case bottom_outer
                let bottom_outer__part_0 = case_plate_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom_outer__part_0_bounds = bottom_outer__part_0.getBounds();
                let bottom_outer__part_0_x = bottom_outer__part_0_bounds[0].x + (bottom_outer__part_0_bounds[1].x - bottom_outer__part_0_bounds[0].x) / 2
                let bottom_outer__part_0_y = bottom_outer__part_0_bounds[0].y + (bottom_outer__part_0_bounds[1].y - bottom_outer__part_0_bounds[0].y) / 2
                bottom_outer__part_0 = translate([-bottom_outer__part_0_x, -bottom_outer__part_0_y, 0], bottom_outer__part_0);
                bottom_outer__part_0 = rotate([0,0,0], bottom_outer__part_0);
                bottom_outer__part_0 = translate([bottom_outer__part_0_x, bottom_outer__part_0_y, 0], bottom_outer__part_0);

                bottom_outer__part_0 = translate([0,0,0], bottom_outer__part_0);
                let result = bottom_outer__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_outer_case_fn();
            }

        