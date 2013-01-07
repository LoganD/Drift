<html>
    <head>
        <title>Test</title>
        <SCRIPT LANGUAGE="JavaScript">
        function averageHd(ht12, ht9, ht6, ht3, htsur, form){
            var h12 = parseFloat(ht12);
            var h9 = parseFloat(ht9);
            var h6 = parseFloat(ht6);
            var h3 = parseFloat(ht3);
            var hsur = parseFloat(htsur);
            form.avghd.value = (h12 + h9 + h6 + h3 + hsur)/5;
        }
        function averageSp(st12, st9, st6, st3, stsur, form){
            var s12 = parseFloat(st12);
            var s9 = parseFloat(st9);
            var s6 = parseFloat(st6);
            var s3 = parseFloat(st3);
            var ssur = parseFloat(stsur);
            form.avgsp.value = (s12 + s9 + s6 + s3 + ssur)/5;
        }
        function averageFf(ht12, ht9, ht6, ht3, st12, st9, st6, st3, ff_time, form){
            var h12 = parseFloat(ht12);
            var h9 = parseFloat(ht9);
            var h6 = parseFloat(ht6);
            var h3 = parseFloat(ht3);
            var s12 = parseFloat(st12);
            var s9 = parseFloat(st9);
            var s6 = parseFloat(st6);
            var s3 = parseFloat(st3);
            var time = parseFloat(ff_time);
            form.ff_hd.value = (h12 + h9 + h6 + h3)/4;
            form.ff_ds.value = ((s12 + s9 + s6 + s3)/4)/time;
        }
        function averageCp(ht3, htsur, st3, stsur, open_alt, form){
            var hsur = parseFloat(htsur);
            var h3 = parseFloat(ht3);
            var ssur = parseFloat(stsur);
            var s3 = parseFloat(st3);
            var open = parseFloat(open_alt);
            form.cp_hd.value = (hsur + h3)/2;
            form.cp_ds.value = (((ssur + s3)/2)/3600)*((open/1000)*60);
        }
        function calcFF_Time(exit_alt, open_alt, form){
            var time = 0;
            oa = parseFloat(open_alt);
            ea = parseFloat(exit_alt);
            var altLeft = ea - oa;
            time += 10;
            altLeft -= 1000;
            altLeft = altLeft/1000;
            time += altLeft*5.5;    
            form.ff_time.value = time;
        }
        function calculate(ht12, ht9, ht6, ht3, htsur, st12, st9, st6, st3, stsur, ff_time, open_alt, form){
            if (!form.ff_time){
                calcFF_Time(exit_alt, open_alt, form);
            }
            averageSp(st12, st9, st6, st3, stsur, form);
            averageHd(ht12, ht9, ht6, ht3, htsur, form);
            averageFf(ht12, ht9, ht6, ht3, st12, st9, st6, st3, ff_time, form);
            averageCp(ht3, htsur, st3, stsur, open_alt, form);
        }
        function fill(form){
            form.hd12.value = 290;
            form.sp12.value = 25;
            form.hd9.value = 270;
            form.sp9.value = 20;
            form.hd6.value = 260;
            form.sp6.value = 18;
            form.hd3.value = 250;
            form.sp3.value = 15;
            form.hdsur.value = 280;
            form.spsur.value = 13;
            //form.avghd.value = "";
            //form.avgsp.value = "";
            form.exit_alt.value = 13500;
            form.open_alt.value = 3000;
            form.ff_time.value = 60;
            //form.ff_hd.value = "";
            //form.ff_ds.value = "";
            //form.cp_hd.value = "";
            //form.cp_ds.value = "";
        }
        </script> 
    </head>
    <body>
        <FORM NAME="Drift Calculator" METHOD="post">
            <table cellpadding="5" cellspacing="5" width="100%">
                <tr>
                    <th><b>Altitude</b></th>
                    <th><b>Heading</b></th>
                    <th><b>Speed [MPH]</b></th>
                </tr>
                <tr>
                    <td>12,000ft</td>
                    <td><INPUT TYPE=TEXT NAME="hd12"></td>
                    <td><INPUT TYPE=TEXT NAME="sp12"></td>
                </tr>
                <tr>
                    <td>9,000ft</td>
                    <td><INPUT TYPE=TEXT NAME="hd9"></td>
                    <td><INPUT TYPE=TEXT NAME="sp9"></td>
                </tr>
                <tr>
                    <td>6,000ft</td>
                    <td><INPUT TYPE=TEXT NAME="hd6"></td>
                    <td><INPUT TYPE=TEXT NAME="sp6"></td>
                </tr>
                <tr>
                    <td>3,000ft</td>
                    <td><INPUT TYPE=TEXT NAME="hd3"></td>
                    <td><INPUT TYPE=TEXT NAME="sp3"></td>
                </tr>
                <tr>
                    <td>Surface</td>
                    <td><INPUT TYPE=TEXT NAME="hdsur"></td>
                    <td><INPUT TYPE=TEXT NAME="spsur"></td>
                </tr>
                <tr>
                    <td><b>Average</b></td>
                    <td><INPUT TYPE=TEXT NAME="avghd"></td>
                    <td><INPUT TYPE=TEXT NAME="avgsp"></td>
                </tr>
            </table>
            <br />
            Exit Altitude    <INPUT TYPE=TEXT NAME="exit_alt"><br />
            Opening Altitude <INPUT TYPE=TEXT NAME="open_alt">  <br />
            Freefall Time    <INPUT TYPE=TEXT NAME="ff_time">   <br />
            <br/>
            <INPUT TYPE="button" VALUE="Calculate" name="calc"onClick="calculate(this.form.hd12.value, this.form.hd9.value, this.form.hd6.value, this.form.hd3.value, this.form.hdsur.value, this.form.sp12.value, this.form.sp9.value, this.form.sp6.value, this.form.sp3.value, this.form.spsur.value, this.form.ff_time.value, this.form.open_alt.value, this.form)">
            <INPUT TYPE="button" VALUE="Fill Values" name="fillbt" onClick="fill(this.form)">
            <INPUT TYPE="button" VALUE="Test Function" name="test" onClick="calcFF_Time(this.form.exit_alt.value, this.form.open_alt.value, this.form)">
            <INPUT TYPE="button" VALUE="Map It" name="Map" onClick="mapCalc(this.form)">
            <br />
            <br />
            <b> Freefall Drift </b> <br/>
            <table cellpadding="5" cellspacing="5" width="100%">
                <tr>
                    <td><b>Altitude</b></td>
                    <td><b>Heading</b></td>
                    <td><b>Distance</b></td>
                </tr>
                <tr>
                    <td></td>
                    <td><INPUT TYPE=TEXT NAME="ff_hd"></td>
                    <td><INPUT TYPE=TEXT NAME="ff_ds"></td>
                </tr>
            </table>
            <br/>
            <b> Canopy Drift </b> <br/>
            <table cellpadding="5" cellspacing="5" width="100%">
                <tr>
                    <td><b>Altitude</b></td>
                    <td><b>Heading</b></td>
                    <td><b>Distance</b></td>
                </tr>
                <tr>
                    <td></td>
                    <td><INPUT TYPE=TEXT NAME="cp_hd"></td>
                    <td><INPUT TYPE=TEXT NAME="cp_ds"></td>
                </tr>
            </table>
            <br/ >
            <br/ >
            <table cellpadding="5" cellspacing="5" width="100%">
                <tr>
                    <td><b>Starting Point</b></td>
                    <td><b>Distance in KM</b></td>
                    <td><b>Opening Point</b></td>
                </tr>
                <tr>
                    <td><INPUT TYPE=TEXT NAME="stpt"></td>
                    <td><INPUT TYPE=TEXT NAME="dskm"></td>
                    <td><INPUT TYPE=TEXT NAME="oppt"></td>
                </tr>
            </table>
            <table cellpadding="5" cellspacing="5" width="100%">
                <tr>
                    <td><b>Distance in KM2</b></td>
                    <td><b>Exit Point</b></td>
                </tr>
                <tr>
                    <td><INPUT TYPE=TEXT NAME="dskm2"></td>
                    <td><INPUT TYPE=TEXT NAME="expt"></td>
                </tr>
            </table>
        </form>
   </body>
</html>
