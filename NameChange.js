<h1 id="result">Name</h1>
<button onclick="update(event)">Dinesh</button>
<button onclick="update(event)">Bala</button>
<button onclick="update(event)">Aravinth</button>
<button onclick="update(event)">John</button>

<script>
    var h1 = document.getElementById("result")

    function update(event)
    {
        h1.textContent=event.target.textContent
    }
</script>
