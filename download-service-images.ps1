# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "public/services/custom-homes"
New-Item -ItemType Directory -Force -Path "public/services/renovations"
New-Item -ItemType Directory -Force -Path "public/services/kitchens-baths"
New-Item -ItemType Directory -Force -Path "public/services/decks"
New-Item -ItemType Directory -Force -Path "public/services/masonry"

# Define image URLs for each service
$customHomes = @{
    "hero.jpg" = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    "1.jpg" = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    "2.jpg" = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    "3.jpg" = "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
    "4.jpg" = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    "5.jpg" = "https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
}

$renovations = @{
    "hero.jpg" = "https://images.unsplash.com/photo-1534237710431-e2fc698436d0"
    "1.jpg" = "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    "2.jpg" = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    "3.jpg" = "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516"
    "4.jpg" = "https://images.unsplash.com/photo-1513694203232-719a280e022f"
    "5.jpg" = "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516"
}

$kitchensBaths = @{
    "hero.jpg" = "https://images.unsplash.com/photo-1556911220-bff31c812dba"
    "1.jpg" = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
    "2.jpg" = "https://images.unsplash.com/photo-1556909172-54557c7e4fb7"
    "3.jpg" = "https://images.unsplash.com/photo-1556910585-09baa3a3998e"
    "4.jpg" = "https://images.unsplash.com/photo-1556911261-6bd341186b2f"
    "5.jpg" = "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a"
}

$decks = @{
    "hero.jpg" = "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9"  # Beautiful lakefront deck
    "1.jpg" = "https://images.unsplash.com/photo-1600607688969-a5bfcd646154"     # Multi-level deck
    "2.jpg" = "https://images.unsplash.com/photo-1600566752355-35792bedcfea"     # Covered deck
    "3.jpg" = "https://images.unsplash.com/photo-1600585154526-990dced4db0d"     # Custom railing
    "4.jpg" = "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28"     # Deck with outdoor kitchen
    "5.jpg" = "https://images.unsplash.com/photo-1580130037321-446dba3cacc2"     # Evening deck with lighting
}

$masonry = @{
    "hero.jpg" = "https://images.unsplash.com/photo-1542889601-399c4f3a8402"  # Beautiful stone wall
    "1.jpg" = "https://images.unsplash.com/photo-1578662996442-48f60103fc96"     # Stone fireplace
    "2.jpg" = "https://images.unsplash.com/photo-1614251056216-f748f76cd228"     # Stone patio
    "3.jpg" = "https://images.unsplash.com/photo-1621857426350-ddab819cf0cc"     # Stone retaining wall
    "4.jpg" = "https://images.unsplash.com/photo-1558346547-4439467bd1d5"     # Mixed stone and brick
    "5.jpg" = "https://images.unsplash.com/photo-1604514649606-2fdd0399de88"     # Stone walkway
}

# Function to download images
function Download-Images($images, $directory) {
    foreach ($image in $images.GetEnumerator()) {
        $outputPath = Join-Path $directory $image.Key
        Write-Host "Downloading $($image.Value) to $outputPath"
        Invoke-WebRequest -Uri "$($image.Value)?w=1920&q=80" -OutFile $outputPath
    }
}

# Download all images
Download-Images $customHomes "public/services/custom-homes"
Download-Images $renovations "public/services/renovations"
Download-Images $kitchensBaths "public/services/kitchens-baths"
Download-Images $decks "public/services/decks"
Download-Images $masonry "public/services/masonry"