
    const xb = document.querySelector('.xb');
    const b = document.getElementById('butto');
    let isDataVisible = false;
    const loadingScreen = document.getElementById('loading-screen');


    async function fetchData() {
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
            xb.innerHTML = ""; 
           
        } else {
            b.innerHTML = "HIDE ITEMS"
            fetchData(); 
            showLoading();
        }

        isDataVisible = !isDataVisible;
    }

    
    function showLoading() {
        loadingScreen.style.display = 'flex';
    }
    
    function hideLoading() {
        loadingScreen.style.display = 'none';
    }

    b.addEventListener('click', toggleData);
