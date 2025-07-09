document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("purchaseBtn");
  const closeBtn = document.getElementById("closePurchaseModal");
  const modal = document.getElementById("purchaseModal");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  console.log("✅ Event-based modal handlers ready");
});
