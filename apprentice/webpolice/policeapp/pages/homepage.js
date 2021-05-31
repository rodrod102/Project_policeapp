const Homepage = () => {
  return (
    <div className="container ">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://image.bangkokbiznews.com/kt/media/image/news/2020/04/27/878118/750x422_878118_1587993987.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card card-new">
        <h5 class="card-header">ข่าว</h5>
        <div class="card-body">
          <h5 class="card-title">หัวข้อข่าว</h5>
          <p class="card-text">
            เนื้อหาข่าว
          </p>
          <a href="#" class="btn btn-primary">
            อ่านเพิ่ม
          </a>
        </div>
      </div>
      <div class="card card-new">
        <h5 class="card-header">ข่าว</h5>
        <div class="card-body">
          <h5 class="card-title">หัวข้อข่าว</h5>
          <p class="card-text">
            เนื้อหาข่าว
          </p>
          <a href="#" class="btn btn-primary">
            อ่านเพิ่ม
          </a>
        </div>
      </div>
      <div class="card card-new">
        <h5 class="card-header">ข่าว</h5>
        <div class="card-body">
          <h5 class="card-title">หัวข้อข่าว</h5>
          <p class="card-text">
            เนื้อหาข่าว
          </p>
          <a href="#" class="btn btn-primary">
            อ่านเพิ่ม
          </a>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
