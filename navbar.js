
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Navbar & Password JS Loaded!");

    // 🎯 Navbar User Role Logic
    const navbar = document.querySelector("nav ul");
    if (!navbar) {
        console.error("❌ Navbar not found!");
        return;
    }

    let userRole = localStorage.getItem("userRole");  
    console.log("👤 User Role:", userRole);
    
    // 🚫 Agar userRole exist nahi karta, toh ensure karo ki "Post" button dikhe hi na
    if (!userRole) {
        console.log("🚫 No user role found! Hiding post option.");
        return;
    }

    // Remove previous "Post" button if it exists
    const existingPostButton = document.querySelector(".post-link");
    if (existingPostButton) {
        existingPostButton.parentElement.remove();
    }

    // 🎯 If user is "artist", show "Post" button
    if (userRole === "artist") {
        const postLink = document.createElement("li");
        postLink.innerHTML = `<a href="post.html" class="post-link">Post</a>`;
        navbar.appendChild(postLink);
        console.log("✅ Post button added for artist!");
    } else {
        console.log("🚫 Post button NOT added for non-artist users!");
    }
});
// 🎯 Cancel icon logic
const cancelIcon = document.querySelector(".cancel-icon"); // Cancel icon ka selector check karo
if (cancelIcon) {
    cancelIcon.addEventListener("click", function () {
        console.log("❌ Cancel icon clicked! Removing Post button...");
        const postButton = document.querySelector(".post-link");
        if (postButton) {
            postButton.parentElement.remove();
            console.log("✅ Post button removed!");
        }
    });
} else {
    console.warn("⚠️ Cancel icon not found!");
}

