import React from 'react';

function ItemListContainer(props) {
  return (
    <div className="full-width-container">
      <h2 className="text-center display-1 mt-5 mb-5" style={{ marginBottom: '20px' }}>{props.greeting}</h2>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/images/home-1.jpg" alt="Pareja disfrutando un helado" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title display-5 mb-5">El amor está en los detalles... y en nuestros helados.</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor at, eos ut consectetur quaerat, tempora quod voluptates perferendis nulla cumque odio laboriosam esse quas minus tenetur, placeat cum deleniti.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-5">
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title display-5 mb-5">Helados que hacen sonreír corazones.</h4>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor at, eos ut consectetur quaerat, tempora quod voluptates perferendis nulla cumque odio laboriosam esse quas minus tenetur, placeat cum deleniti.</p>
      </div>
    </div>
    <div className="col-md-4">
    <img src="/images/home-2.jpg" alt="Niños disfrutando un helado" className="img-fluid rounded-start" />
    </div>
  </div>
</div>

      <div className="card mb-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/images/home-3.jpg" alt="Amigos disfrutando un helado" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title display-5 mb-5">Sabores deliciosos, momentos inolvidables.</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor at, eos ut consectetur quaerat, tempora quod voluptates perferendis nulla cumque odio laboriosam esse quas minus tenetur, placeat cum deleniti.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card-group">
  <div class="card">
    <img src="/images/imagen1-home.png" class="card-img-top" alt="Primer paso seleccionar productos" style={{maxWidth: "500px"}} />
    <div class="card-body">
      <h5 class="card-title">En la sección productos, selecciona el sabor que más te guste y haz clic en el botón de añadir al carrito!</h5>
    </div>
  </div>
  <div class="card mb-3">
    <img src="/images/imagen2-home.png" class="card-img-top" alt="Segundo paso seleccionar productos" style={{maxWidth: "600px"}} />
    <div class="card-body">
      <h5 class="card-title">En el chat con nuestro equipo, confirma tu pedido, tu medio de pago e indica tu dirección (Si deseas menos cantidad aclaraselo al personal)</h5>
    </div>
  </div>
  <div class="card">
    <img src="/images/imagen3-home.png" class="card-img-top" alt="Tercer paso delivery" style={{maxWidth: "500px"}}/>
    <div class="card-body">
      <h5 class="card-title">¡Y listo! Nuestro delivery saldrá de inmediato a entregarte el helado más rico</h5>
    </div>
  </div>
</div>
</div>

  );
}

export default ItemListContainer;

