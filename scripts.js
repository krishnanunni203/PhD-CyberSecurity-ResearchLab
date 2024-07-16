/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and Main Container */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: #f4f4f4;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background: linear-gradient(to right, #0066cc, #00cc99);
    color: #fff;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.section {
    display: none;
    text-align: center;
}

.section.active {
    display: block;
}

.section h2 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.section p, .section ul {
    font-size: 1.2rem;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 300px;
    overflow: hidden;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    animation: fadeIn 1s ease-in-out;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
}

.card h3 {
    padding: 10px;
    background: #0066cc;
    color: #fff;
    margin: 0;
    font-size: 1.5rem;
}

.card p {
    padding: 10px;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.card:hover img {
    opacity: 0.8;
}

footer {
    background: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-size: 0.8rem;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
