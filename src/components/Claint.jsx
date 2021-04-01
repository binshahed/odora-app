import clientImg from '../assets/images/client.jpg'

const Claint = () => {
    return (
        <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              What says our customers
            </h2>
          </div>
          <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-7 mx-auto">
                    <div className="client_container">
                      <div className="client_detail">
                        <p>
                          <i className="fa fa-quote-left" aria-hidden="true"></i> &nbsp;
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                          alteration in The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                          letters, generators on the Internet tend to repeat predefined chunks as necessary &nbsp;
                          <i className="fa fa-quote-right" aria-hidden="true"></i>
                        </p>
                      </div>
                      <div className="img-box">
                        <img src={clientImg} alt=""/>
                      </div>
                      <div className="name">
                        <h5>
                          Alina Johnson
                        </h5>
                        <h6>
                          <span>
                            Customer
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 mx-auto">
                    <div className="client_container">
                      <div className="client_detail">
                        <p>
                          <i className="fa fa-quote-left" aria-hidden="true"></i> &nbsp;
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                          alteration in The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                          letters, generators on the Internet tend to repeat predefined chunks as necessary &nbsp;
                          <i className="fa fa-quote-right" aria-hidden="true"></i>
                        </p>
                      </div>
                      <div className="img-box">
                      <img src={clientImg} alt=""/>
                      </div>
                      <div className="name">
                        <h5>
                          Alina Johnson
                        </h5>
                        <h6>
                          <span>
                            Customer
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 mx-auto">
                    <div className="client_container">
                      <div className="client_detail">
                        <p>
                          <i className="fa fa-quote-left" aria-hidden="true"></i> &nbsp;
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                          alteration in The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                          letters, generators on the Internet tend to repeat predefined chunks as necessary &nbsp;
                          <i className="fa fa-quote-right" aria-hidden="true"></i>
                        </p>
                      </div>
                      <div className="img-box">
                      <img src={clientImg} alt=""/>
                      </div>
                      <div className="name">
                        <h5>
                          Alina Johnson
                        </h5>
                        <h6>
                          <span>
                            Customer
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
              <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    );
};

export default Claint;