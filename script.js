
    const xb = document.querySelector('.xb');
    const b = document.getElementById('butto');
    let isDataVisible = false;
    const loadingScreen = document.getElementById('loading-screen');



    async function fetchData() {
        // Simulate a delay to show the loading screen
        await new Promise(resolve => setTimeout(resolve, 1000));
    
        const url = 'https://cat-fact.herokuapp.com/facts';
        const options = {
            method: 'GET',
        };
    
        try {
            const response = await fetch(url, options);
            const result = await response.json();
    
            const values = result.map(entry => entry.text);
            xb.innerHTML = values.map(value => `<q>${value}</q>`).join('<br>');
    
        } catch (error) {
            console.error(error);
            xb.innerHTML = "ERROR";
        } finally {
            hideLoading();
        }
    }

    function toggleData() {
        if (isDataVisible) {
            b.innerHTML = "SHOW ITEMS"
            xb.innerHTML = ""; // Clear content if data is visible
           
        } else {
            b.innerHTML = "HIDE ITEMS"
            fetchData(); // Fetch and display data
            showLoading();
        }

        isDataVisible = !isDataVisible; // Toggle the state
    }

    
    function showLoading() {
        loadingScreen.style.display = 'flex';
    }
    
    function hideLoading() {
        loadingScreen.style.display = 'none';
    }

    b.addEventListener('click', toggleData);