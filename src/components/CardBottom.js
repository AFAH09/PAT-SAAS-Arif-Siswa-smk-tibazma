function CardBottom() {
  const imageStyle = {
    objectFit: 'cover'
  };

  return (
    <div className="container bg-body-tertiary p-5" id="sekolah">
      <div className="row">
        <div className="col-md-8">
          <h1>Fasilitas Sekolah</h1>
          <div className="row">
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={require('../images/Lapangan.jpg')}
                      className="img-fluid rounded-start"
                      alt="Lapangan Olahraga"
                      style={imageStyle}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">Lapangan Olahraga</p>
                      <small className="text-body-secondary">SMK TI Bazma</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={require('../images/Asrama.jpg')}
                      className="img-fluid rounded-start"
                      alt="Gedung Asrama"
                      style={imageStyle}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">Gedung Asrama</p>
                      <p className="card-text">
                        <small className="text-body-secondary">SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={require('../images/Kelas.jpg')}
                      className="img-fluid rounded-start"
                      alt="Ruang Kelas & Lab"
                      style={imageStyle}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">Ruang Kelas & Lab</p>
                      <p className="card-text">
                        <small className="text-body-secondary">SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={require('../images/Masjid.jpg')}
                      className="img-fluid rounded-start"
                      alt="Masjid & Aula"
                      style={imageStyle}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">Masjid & Aula</p>
                      <p className="card-text">
                        <small className="text-body-secondary">SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={require('../images/Hero.jpg')}
                      className="img-fluid rounded-start"
                      alt="Depan Sekolah"
                      style={imageStyle}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">Depan Sekolah</p>
                      <p className="card-text">
                        <small className="text-body-secondary">SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={require('../images/Logo-footer.png')}
                      className="img-fluid rounded-start"
                      alt="Logo Sekolah"
                      style={imageStyle}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">Logo Sekolah</p>
                      <p className="card-text">
                        <small className="text-body-secondary">SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src={require('../images/02.jpg')}
            className="img-fluid"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default CardBottom;
