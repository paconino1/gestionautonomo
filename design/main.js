/* 
   LOGICA BASE - GESTIÓN AUTÓNOMO
   - Tabla de contenidos interactiva
   - Prevención de defaults
   - Navegación fluida
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Tabla de Contenidos Dinámica (Si existe el contenedor)
    const tocContainer = document.querySelector('#dynamic-toc');
    const articleHeaders = document.querySelectorAll('.article-main h2');
    
    if (tocContainer && articleHeaders.length > 0) {
        const ul = document.createElement('ul');
        
        articleHeaders.forEach((header, index) => {
            // Asignar ID si no tiene
            if (!header.id) {
                header.id = `seccion-${index}`;
            }
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = header.textContent;
            a.href = `#${header.id}`;
            
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        tocContainer.appendChild(ul);
    }
    
    // 2. Prevenir saltos bruscos en enlaces vacíos o botones
    document.querySelectorAll('a[href="#"], button').forEach(el => {
        el.addEventListener('click', (e) => {
            if (el.tagName === 'A' && el.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // 3. Sistema de notificación Toast (Visual feedback)
    window.showToast = (message) => {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        
        // Estilos rápidos vía JS para no depender de CSS si es algo puntual
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#1a2b4b',
            color: '#fff',
            padding: '1.5rem 3rem',
            borderRadius: '5px',
            zIndex: '1000',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'opacity 0.3s'
        });

        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    console.log('Gestión Autónomo: JS cargado y listo.');
});
