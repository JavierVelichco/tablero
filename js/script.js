// Definir las piezas en cada casilla del tablero
    const posiciones = {
      "A1": "♖", "B1": "♘", "C1": "♗", "D1": "♕", "E1": "♔", "F1": "♗", "G1": "♘", "H1": "♖",
      "A2": "♙", "B2": "♙", "C2": "♙", "D2": "♙", "E2": "♙", "F2": "♙", "G2": "♙", "H2": "♙",
      "A7": "♟︎", "B7": "♟︎", "C7": "♟︎", "D7": "♟︎", "E7": "♟︎", "F7": "♟︎", "G7": "♟︎", "H7": "♟︎",
      "A8": "♜", "B8": "♞", "C8": "♝", "D8": "♛", "E8": "♚", "F8": "♝", "G8": "♞", "H8": "♜"
    };

    // Definir las combinaciones de pieza+casilla que corresponden a los poemas
    const combinaciones = {
      "♖-A1": "./paginas/poemaspoema1.html",
      "♘-B1": "./paginas/poemaspoema2.html",
      "♗-C1": "./paginas/poemaspoema3.html",
      "♕-D1": "./paginas/poemaspoema4.html",
      "♔-E1": "./paginas/poemaspoema5.html",
      "♖-A2": "./paginas/poemaspoema6.html",
      "♘-B2": "./paginas/poemaspoema7.html",
      "♗-C2": "./paginas/poemaspoema8.html",
      "♕-D2": "./paginas/poemaspoema9.html",
      "♔-E2": "./paginas/poemaspoema10.html",
      "♖-A3": "./paginas/poemaspoema11.html",
      "♘-B3": "./paginas/poemaspoema12.html",
      "♗-C3": "./paginas/poemaspoema13.html",
      "♕-D3": "./paginas/poemaspoema14.html",
      "♔-E3": "./paginas/poemaspoema15.html",
      "♖-A4": "./paginas/poemaspoema16.html",
      "♘-B4": "./paginas/poemaspoema17.html",
      "♗-C4": "./paginas/poemaspoema18.html",
      "♕-D4": "./paginas/poemaspoema19.html",
      "♔-E4": "./paginas/poemaspoema20.html",
      "♖-A5": "./paginas/poemaspoema21.html",
      "♘-B5": "./paginas/poemaspoema22.html",
      "♗-C5": "./paginas/poemaspoema23.html",
      "♕-D5": "./paginas/poemaspoema24.html",
      "♔-E5": "./paginas/poemaspoema25.html",
      "♖-A6": "./paginas/poemaspoema26.html",
      "♘-B6": "./paginas/poemaspoema27.html",
      "♗-C6": "./paginas/poemaspoema28.html",
      "♕-D6": "./paginas/poemaspoema29.html",
      "♔-E6": "./paginas/poemaspoema30.html",
      "♖-A7": "./paginas/poemaspoema31.html",
      "♘-B7": "./paginas/poemaspoema32.html",
      "♗-C7": "./paginas/poemaspoema33.html",
      "♕-D7": "./paginas/poemaspoema34.html",
      "♔-E7": "./paginas/poemaspoema35.html",
      "♖-A8": "./paginas/poemaspoema36.html",
      "♘-B8": "./paginas/poemaspoema37.html",
      "♗-C8": "./paginas/poemaspoema38.html",
      "♕-D8": "./paginas/poemaspoema39.html",
      "♔-E8": "./paginas/poemaspoema40.html"
      
      // Añadir todas las combinaciones posibles
    };

    // Crear el tablero
    const letras = 'ABCDEFGH';
    const board = document.getElementById('board');

    // Función que carga el tablero con las piezas y enlaces a los poemas
    function cargarTablero() {
      for (let fila = 0; fila < 8; fila++) {
        for (let col = 0; col < 8; col++) {
          const coord = letras[col] + (8 - fila);  // Ejemplo: A1, B1, etc.
          const esBlanca = (fila + col) % 2 === 0;
          const pieza = posiciones[coord];  // Obtener la pieza en la casilla
          const clave = pieza ? `${pieza}-${coord}` : null;
          const poema = clave && combinaciones[clave];

          const cell = document.createElement(pieza ? 'a' : 'div');
          cell.className = `cell ${esBlanca ? 'white' : 'black'}`;
          cell.textContent = pieza || '';  // Poner la pieza o dejarla vacía

          if (poema) {
            // Si la casilla tiene pieza y hay un poema, hacerla un enlace
            cell.href = poema;
            cell.title = `Poema para ${pieza} en ${coord}`;
            cell.setAttribute('aria-label', cell.title);
          } else {
            // Si la casilla está vacía, añadir el mensaje de "Puedes colocar una pieza"
            cell.addEventListener('click', (e) => {
              e.preventDefault();

              // Mostrar el mensaje solo si la casilla está vacía
              if (!pieza) {  // Esta condición asegura que solo se muestre el mensaje en las casillas vacías
                const mensaje = document.getElementById('mensaje');
                mensaje.textContent = `Puedes colocar una pieza aquí para crear el poema en ${coord}.`;

                const rect = e.target.getBoundingClientRect();
                mensaje.style.top = `${rect.top - 40}px`;
                mensaje.style.left = `${rect.left + rect.width / 2}px`;
                mensaje.style.display = 'block';

                // Ocultar el mensaje después de 3 segundos
                clearTimeout(mensaje._timeout);
                mensaje._timeout = setTimeout(() => {
                  mensaje.style.display = 'none';
                }, 3000);
              }
            });
          }

          board.appendChild(cell);
        }
      }
    }

    // Cargar el tablero cuando la página termine de cargar
    document.addEventListener('DOMContentLoaded', cargarTablero);