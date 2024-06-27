import { useEffect, useRef } from "react"


function Experiences() {

    const romaipark = useRef(null)
    const szkd = useRef(null)

    useEffect(() => {
        if (romaipark && romaipark.current) {
          const apiResponse = "https://romaipark-heviz.hu/";
          romaipark.current.src = apiResponse;
        }
      }, []);
      useEffect(() => {
        if (szkd && szkd.current) {
          const apiResponse = "https://szkdvendeghaz.hu/";
          szkd.current.src = apiResponse;
        }
      }, []);
    
      return (
        <section className="bg-white bg-opacity-30 rounded shadow backdrop-blur-lg p-5 mb-14 text-white">


        <h1 className="text-white text-2xl font-bold">Tapasztalatok</h1>
        <h2 className="text-white text-xl font-bold">Versenyeredmények</h2>
        <p>Nemes Tihamér Nemzetközi Programozási Verseny 2022 döntő: <b>42. hely</b></p>
        <p>Országos Grafikus Programozási Verseny 2022 döntő: <b>21. hely</b></p>
        <h2 className="text-white text-xl font-bold">Referencia munkák</h2>
      <div className="w-3/4 mx-auto bg-slate-900">
          <iframe
            ref={romaipark}
            title="Római Lakópark Hévíz"
            width="100%"
            height="600px"
          />
        </div>
        <div className="w-3/4 mx-auto bg-slate-900">
          <iframe
            ref={szkd}
            title="Római Lakópark Hévíz"
            width="100%"
            height="600px"
          />
        </div>
    </section>
        
      );
}

export default Experiences
