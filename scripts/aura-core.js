document.addEventListener("DOMContentLoaded", () => {

  /* --------------------------------------------- */
  /* MOBILE MENU                                   */
  /* --------------------------------------------- */
  const toggle = document.querySelector(".ap-menu-toggle");
  const nav = document.querySelector(".ap-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.classList.remove("open");
      });
    });
  }

  /* --------------------------------------------- */
  /* DROPDOWNS                                     */
  /* --------------------------------------------- */
  document.querySelectorAll(".ap-dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btn.parentElement.classList.toggle("open");
    });
  });

  /* --------------------------------------------- */
  /* FLOATING SEARCH BAR                           */
  /* --------------------------------------------- */
  const floatingSearch = document.getElementById("apFloatingSearch");
  if (floatingSearch) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        floatingSearch.classList.add("visible");
      } else {
        floatingSearch.classList.remove("visible");
      }
    });

    floatingSearch.querySelector("input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const q = e.target.value.trim();
        if (q.length > 0) {
          window.location.href = `search.html?q=${encodeURIComponent(q)}`;
        }
      }
    });
  }

  /* --------------------------------------------- */
  /* CHAT PANEL                                    */
  /* --------------------------------------------- */
  const chatBubble = document.getElementById("apChatBubble");

  if (chatBubble) {
    chatBubble.addEventListener("click", () => {
      openChatPanel();
    });
  }

  function openChatPanel() {
    let panel = document.getElementById("apChatPanel");

    if (!panel) {
      panel = document.createElement("div");
      panel.id = "apChatPanel";
      panel.innerHTML = `
        <div class="ap-chat-panel-inner">
          <div class="ap-chat-header">
            <span>Chat with AuraPop</span>
            <button id="apChatClose">×</button>
          </div>
          <div class="ap-chat-body">
            <p>Hello beautiful! How can I help you today?</p>
          </div>
          <div class="ap-chat-input">
            <input type="text" placeholder="Type a message..." />
            <button id="apChatSend">Send</button>
          </div>
        </div>
      `;
      document.body.appendChild(panel);
    }

    panel.classList.add("open");

    document.getElementById("apChatClose").onclick = () => {
      panel.classList.remove("open");
    };
  }

  /* --------------------------------------------- */
  /* ACTIVE LINK HIGHLIGHTING                      */
  /* --------------------------------------------- */
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".ap-nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  /* --------------------------------------------- */
  /* STICKY HEADER SHADOW                          */
  /* --------------------------------------------- */
  const header = document.querySelector(".ap-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

});
