
    const cal = () => {
        let m1_r1c1 = Number(document.getElementById("m1_r1c1").value);
        let m1_r1c2 = Number(document.getElementById("m1_r1c2").value);
        let m1_r1c3 = Number(document.getElementById("m1_r1c3").value);
        let m1_r2c1 = Number(document.getElementById("m1_r2c1").value);
        let m1_r2c2 = Number(document.getElementById("m1_r2c2").value);
        let m1_r2c3 = Number(document.getElementById("m1_r2c3").value);
        let m1_r3c1 = Number(document.getElementById("m1_r3c1").value);
        let m1_r3c2 = Number(document.getElementById("m1_r3c2").value);
        let m1_r3c3 = Number(document.getElementById("m1_r3c3").value);

        let m2_r1c1 = Number(document.getElementById("m2_r1c1").value);
        let m2_r1c2 = Number(document.getElementById("m2_r1c2").value);
        let m2_r1c3 = Number(document.getElementById("m2_r1c3").value);
        let m2_r2c1 = Number(document.getElementById("m2_r2c1").value);
        let m2_r2c2 = Number(document.getElementById("m2_r2c2").value);
        let m2_r2c3 = Number(document.getElementById("m2_r2c3").value);
        let m2_r3c1 = Number(document.getElementById("m2_r3c1").value);
        let m2_r3c2 = Number(document.getElementById("m2_r3c2").value);
        let m2_r3c3 = Number(document.getElementById("m2_r3c3").value);

        // let m3_r1c1 = Number(document.getElementById("m3_r1c1").value);
        // let m3_r1c2 = Number(document.getElementById("m3_r1c2").value);
        // let m3_r1c3 = Number(document.getElementById("m3_r1c3").value);
        // let m3_r2c1 = Number(document.getElementById("m3_r2c1").value);
        // let m3_r2c2 = Number(document.getElementById("m3_r2c2").value);
        // let m3_r2c3 = Number(document.getElementById("m3_r2c3").value);
        // let m3_r3c1 = Number(document.getElementById("m3_r3c1").value);
        // let m3_r3c2 = Number(document.getElementById("m3_r3c2").value);
        // let m3_r3c3 = Number(document.getElementById("m3_r3c3").value);

        let m1 = [
            [m1_r1c1, m1_r1c2, m1_r1c3],
            [m1_r2c1, m1_r2c2, m1_r2c3],
            [m1_r3c1, m1_r3c2, m1_r3c3]
        ];

        let m2 = [
            [m2_r1c1, m2_r1c2, m2_r1c3],
            [m2_r2c1, m2_r2c2, m2_r2c3],
            [m2_r3c1, m2_r3c2, m2_r3c3]
        ];

        let m3 = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        // m3 = m1.map((row,index)=>{
        // row.map((el,i)=>{
        // el + m2[index][i];
        // })
        // })

        // console.log(m3);


        for (let i = 0; i < m1.length; i++) { for (let j = 0; j < m2.length; j++) { m3[i][j] = m1[i][j] + m2[i][j] } }
        document.getElementById("m3_r1c1").value = m3[0][0]; document.getElementById("m3_r1c2").value = m3[0][1];
        document.getElementById("m3_r1c3").value = m3[0][2]; document.getElementById("m3_r2c1").value = m3[1][0];
        document.getElementById("m3_r2c2").value = m3[1][1]; document.getElementById("m3_r2c3").value = m3[1][2];
        document.getElementById("m3_r3c1").value = m3[2][0]; document.getElementById("m3_r3c2").value = m3[2][1];
        document.getElementById("m3_r3c3").value = m3[2][2];}