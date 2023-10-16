import { estandar } from "./desviacion";


describe('esta', () =>{
    it('Should return 62.26 if the array of numbers is 15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2',()=>{
        const result = estandar ([15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]);
        expect(result).toBe(62.26);
    })
        it('Should return 572.03 if the array of numbers is 160,591,114,229,230,270,128,1657,624,1503',()=>{
            const result = estandar ([160,591,114,229,230,270,128,1657,624,1503]);
            expect(result).toBe(572.03);
    })

    
})