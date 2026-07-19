(function () {

    // Script URL se Business ID nikalo
    const currentScript = document.currentScript;
    const scriptUrl = new URL(currentScript.src);
    const businessId = scriptUrl.searchParams.get("id");

    if (!businessId) {
        console.error("AI Bot Error: 'id' parameter missing.");
        return;
    }

    // Main Container
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.bottom = "20px";
    container.style.right = "20px";
    container.style.zIndex = "999999";

    // Floating AI GIF Button
    const btn = document.createElement("img");
    btn.src = "https://apnichat.free.nf/images/ai.gif";
    btn.alt = "AI Chat";
    btn.style.width = "70px";
    btn.style.height = "70px";
    btn.style.cursor = "pointer";
    btn.style.userSelect = "none";
    btn.style.transition = "0.3s";
    btn.style.objectFit = "cover";
    btn.style.filter = "drop-shadow(0 6px 15px rgba(0,0,0,.25))";

    btn.onmouseenter = () => btn.style.transform = "scale(1.08)";
    btn.onmouseleave = () => btn.style.transform = "scale(1)";

    // Chat Box
    const chat = document.createElement("div");
    chat.style.position = "absolute";
    chat.style.bottom = "85px";
    chat.style.right = "0";
    chat.style.width = "380px";
    chat.style.height = "600px";
    chat.style.background = "#fff";
    chat.style.borderRadius = "16px";
    chat.style.overflow = "hidden";
    chat.style.boxShadow = "0 10px 35px rgba(0,0,0,.25)";
    chat.style.transform = "translateY(40px) scale(.9)";
    chat.style.opacity = "0";
    chat.style.pointerEvents = "none";
    chat.style.transition = "all .35s ease";

    // Iframe
    const iframe = document.createElement("iframe");
    iframe.src = `https://ai-sale-system.freedev.app/proxy.php?id=${businessId}`;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    // Close Button
    const close = document.createElement("div");
    close.innerHTML = "âœ•";
    close.style.position = "absolute";
    close.style.top = "10px";
    close.style.right = "10px";
    close.style.width = "32px";
    close.style.height = "32px";
    close.style.background = "#fff";
    close.style.borderRadius = "50%";
    close.style.display = "flex";
    close.style.alignItems = "center";
    close.style.justifyContent = "center";
    close.style.cursor = "pointer";
    close.style.fontSize = "18px";
    close.style.fontWeight = "bold";
    close.style.boxShadow = "0 2px 8px rgba(0,0,0,.2)";
    close.style.zIndex = "10";

    chat.appendChild(iframe);
    chat.appendChild(close);

    let opened = false;

    function openChat() {
        opened = true;
        chat.style.opacity = "1";
        chat.style.transform = "translateY(0) scale(1)";
        chat.style.pointerEvents = "auto";
    }

    function closeChat() {
        opened = false;
        chat.style.opacity = "0";
        chat.style.transform = "translateY(40px) scale(.9)";
        chat.style.pointerEvents = "none";
    }

    btn.onclick = () => {
        if (opened) {
            closeChat();
        } else {
            openChat();
        }
    };

    close.onclick = closeChat;

    container.appendChild(chat);
    container.appendChild(btn);
    document.body.appendChild(container);

})();
