import React from 'react';
import { Carousel } from 'react-bootstrap';


function Sucursales() {
  return (
    <div>
    <Carousel className="mt-5 mb-5">
      <Carousel.Item>
        <img
          src="/images/sucursalnorte.jpg"
          alt="Sucursal Norte"
        />
        <Carousel.Caption>
          <h3 className="titulo-sucursales">Sucursal Norte</h3>
          <p className="texto-sucursales">Te esperamos en nuestra sucursal de calle Avenida Siempre viva 742.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/sucursalcentro.jpg"
          alt="Sucursal Centro"
        />
        <Carousel.Caption>
          <h3 className="titulo-sucursales">Sucursal Centro</h3>
          <p className="texto-sucursales">En nuestro local de calle Finn 1352 te esperamos de 10:00 a 00:00 hs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/sucursalsur.png"
          alt="Sucursal Sur"
        />
        <Carousel.Caption>
          <h3 className="titulo-sucursales">Sucursal Sur</h3>
          <p className="texto-sucursales">En la hermosa zona de los muelles visítanos en nuestro local de calle Libertarios 3389.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          <div className="container text-center mb-5">
          <div className="row">
              <div className="col-md-4">
              <img src="/images/sucursales-4.png" alt="tercer paso delivery" />
                  <h5>Sucursal Norte</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae mollitia nihil voluptate, ex rem aspernatur quod inventore magni, ullam blanditiis exercitationem incidunt, facilis dolorem deserunt eos vel quasi nulla veniam?</p>
              </div>
              <div className="col-md-4">
                  <img src="/images/sucursales-6.png" alt="tercer paso delivery" />
                  <h5>Sucursal Centro</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae mollitia nihil voluptate, ex rem aspernatur quod inventore magni, ullam blanditiis exercitationem incidunt, facilis dolorem deserunt eos vel quasi nulla veniam?</p>
              </div>
              <div className="col-md-4">
              <img src="/images/sucursales-5.png" alt="tercer paso delivery" />
                  <h5>Sucursal Sur</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae mollitia nihil voluptate, ex rem aspernatur quod inventore magni, ullam blanditiis exercitationem incidunt, facilis dolorem deserunt eos vel quasi nulla veniam?</p>
              </div>
          </div>
      </div>
      <div className='mb-5'>
        <h4 className='text-center display-4 mb-5'>Nuestra Historia</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam. Praesent non urna non mauris laoreet ultricies eget at enim. Phasellus lacus odio, ullamcorper ac ipsum in, tincidunt tincidunt massa. Suspendisse ut malesuada sapien, vitae mollis diam. Suspendisse tristique et ex non faucibus. Pellentesque a urna risus. Ut non enim finibus, tempus dui eget, tincidunt sem. Phasellus sed mauris elit. Pellentesque condimentum lorem vitae justo congue, ut semper nisi gravida. Sed viverra nibh eget tincidunt convallis. In egestas non tortor at tempor. Nullam maximus mi ac pharetra dictum. Sed condimentum diam orci, eget condimentum ipsum convallis quis. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscing velit, sed quia non numquam do eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam. Praesent non urna non mauris laoreet ultricies eget at enim. Phasellus lacus odio, ullamcorper ac ipsum in, tincidunt tincidunt massa.
        </p>
      </div>
      </div>
  );
}


export default Sucursales;
