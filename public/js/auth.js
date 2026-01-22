document.getElementById("signupForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value
  };

  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const result = await response.json();
    localStorage.setItem("username", data.username);
    localStorage.setItem("userId", result.userId);
    window.location.href = "/home";
  } else {
    const result = await response.json();
    alert(result.error || "Signup failed");
  }
});

document.getElementById("loginForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const data = {
  email: form.email.value,
  password: form.password.value
  };

  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const result = await response.json();
    localStorage.setItem("username", result.username);
    localStorage.setItem("userId", result.userId);
    window.location.href = "/home";
  } else {
    alert("Invalid email or password");
  }
});