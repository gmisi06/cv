

function AboutMe() {
    const date = new Date();
  const age = date.getFullYear() - 2003;
    
  return (
    <section className="bg-white bg-opacity-30 rounded shadow backdrop-blur-lg p-5 mb-14 text-white">
        <h1 className="text-white text-2xl font-bold">Rólam</h1>
      Én {age} éves vagyok!
      
    </section>
  )
}

export default AboutMe
