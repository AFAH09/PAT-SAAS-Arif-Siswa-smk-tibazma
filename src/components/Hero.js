import '../App.css';

function HeroComponent() {
  return (
    <div className="container mt-5 pt-5" id="about">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <video width="100%" height="auto" controls>
            <source src={require('../videos/Video.mp4')} type="video/mp4" />
          </video>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Islamic Boarding School SMK TI BAZMA
          </h1>
          <p className="lead" style={{ textAlign: 'justify' }}>
            Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) 
            merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu.
            Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan
            wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="button">
              <b>Selengkapnya</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
