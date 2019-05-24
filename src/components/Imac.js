import React from "react"
import "../scss/imac.css"
import { Apple } from "styled-icons/fa-brands/Apple"

const Imac = () => {
  return (
    <div id="ordenador">
      <div id="monitor">
        <div id="pantalla">
          <div id="camara" />
          <div id="reflejopantalla" />
          <div id="visiblepantalla">
            <div className="acceso pagina">
              <img width="auto" src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" alt=""/>
            </div>
          </div>
        </div>
        <div id="bajopantalla">
          <div id="simbolo">
            <span>{<Apple size={42} />}</span>
          </div>
        </div>
      </div>

      <div id="peana">
        <div id="peanavertical">
          <div className="izquierda" />
          <div className="derecha" />
        </div>
        <div id="peanahorizontal">
          <div className="izquierda" />
          <div className="derecha" />
        </div>
        <div id="rebordepeana" />
        <div className="shadow" />
      </div>
    </div>
  )
}

export default Imac
