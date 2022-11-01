function BuyTickets() {
  const html = `
    <section class="row justify-content-center">
      <div class="col-11 col-lg-8 col-xl-7 col-xxl-6">
        <div class="row justify-content-center">
          <div class="col-7 col-lg p-4 border border-primary text-center">
            <h5>Estudiante</h5>
            <p>Tienen un descuento</p>
            <h5>80%</h5>
            <small>* presentar documentación</small>
          </div>
          <div class="col-7 col-lg my-2 my-lg-0 mx-lg-2 p-4 border border-success text-center">
            <h5>Trainee</h5>
            <p>Tienen un descuento</p>
            <h5>50%</h5>
            <small>* presentar documentación</small>
          </div>
          <div class="col-7 col-lg p-4 border border-warning text-center">
            <h5>Junior</h5>
            <p>Tienen un descuento</p>
            <h5>15%</h5>
            <small>* presentar documentación</small>
          </div>

          <section class="row text-center">
            <small>VENTA</small>
            <h2>VALOR DE TICKET $<span id="value">200</span></h2>
          </section>

          <form id="reset">
            <div class="row justify-content-center">
              <div class="col-12 col-lg px-0 mb-2 mb-lg-0 ps-lg-0 pe-lg-1">
                <input id="nameValue" required type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="col-12 col-lg px-0 mt-2 mt-lg-0 ps-lg-1 pe-lg-0">
                <input id="lastNameValue" type="text" class="form-control" placeholder="Apellido" />
              </div>
            </div>
          
            <div class="row">
              <div class="col px-0 my-3">
                <input id="mailValue" type="email" class="form-control" placeholder="Correo" />
              </div>
            </div>
          
            <div class="row">
              <div class="col ps-0 pe-1">
                <p>Cantidad</p>
                <input id="quantity" type="number" min="1" value="1" class="form-control" placeholder="Cantidad" />
              </div>
              <div class="col ps-1 pe-0">
                <p>Categoria</p>
                <select id="inputState" class="form-select">
                  <option selected>Estudiante</option>
                  <option>Trainee</option>
                  <option>Junior</option>
                </select>
              </div>
            </div>
            
            <div class="row">
              <div class="col py-1 my-3 alert-primary rounded border-primary">
                <p class="m-2">Total a Pagar: $ <span id="amount"></span></p>
              </div>
            </div>
          
            <div class="row">
              <button type="button" onclick="reset()" class="col-12 col-lg mb-1 me-lg-1 my-lg-3 py-2 bg-success text-white rounded border-0">
                Borrar
              </button>
              <button type="button" onclick="Buy()" class="col-12 col-lg ms-lg-1 py-2 my-3 bg-success text-white rounded border-0">
                Resumen
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>`;

  return html;

}