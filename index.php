<?php include('./components/header.php'); ?>

<main class="p-4">
    <div class="mb-4">
        <label for="category-filter" class="block text-gray-700">Filter by Category:</label>
        <select id="category-filter" class="mt-1 p-2 border border-gray-300 rounded">
            <option value="all">All Categories</option>
            <option value="Category lap">Laptop</option>
            <option value="Category mob">Mobile</option>
            <option value="Category watch">Watch</option>

        </select>
    </div>

    <div id="product-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
       
    </div>
</main>

<?php include('./components/footer.php'); ?>
