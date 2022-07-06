# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

puts "😃 Seeding users..."
court = User.create(username: 'court', password: '1234')
molly = User.create(username: 'molly', password: '5678')
joey = User.create(username: 'joey', password: '9012')

puts "🏓 Seeding products..."
p1 = Product.create(
    name: 'Clear Cassette Player', 
    description: 'Clear cassette tape player with AM/FM radio. Includes earphones + belt clip for everything you need to rock out to your favorite cassettes.',
    category: 'Music', 
    price: 30.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/37830296_020_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p2 = Product.create(
    name: 'Alanis Morissette: The Collection CD', 
    description: 'Alanis Morissette - Collection (CD NEW)', 
    category: 'Music', 
    price: 16.90, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/78676640_001_m?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p3 = Product.create(
    name: 'Khalid - American Teen CD', 
    description: 'Khalid - American Teen (CD NEW)', 
    category: 'Music', 
    price: 14.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/78438504_001_m?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p4 = Product.create(
    name: 'Leon Bridges - Good Thing CD', 
    description: 'Leon Bridges - Good Thing (CD NEW)', 
    category: 'Music', 
    price: 24.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/79143020_001_m?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p5 = Product.create(
    name: 'Clear Tech Retro CD Player', 
    description: 'Indulge in an old school setup with this personal, portable CD player in a see-though construction. With digital display and button controls. Includes a pair of clear earbud head phones so you can take it on the go.', 
    category: 'Music', 
    price: 20.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/60518735_100_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p6 = Product.create(
    name: 'Post Malone - Stoney CD', 
    description: 'Post Malone - Stoney (CD NEW)', 
    category: 'Music', 
    price: 12.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/79103826_001_m?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p7 = Product.create(
    name: 'Mac Miller - Watching Movies with the Sound Off Cassette Tape', 
    description: 'The second studio album from Mac Miller, Watching Movies with the Sound Off is available exclusively at Urban Outfitters on red cassette tape.', 
    category: 'Music', 
    price: 16.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/62987961_060_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p8 = Product.create(
    name: 'Denzel Curry - Melt My Eyez See Your Future Cassette Tape', 
    description: 'The fifth studio album from American rap artist Denzel Curry.', 
    category: 'Music', 
    price: 13.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/78944881_030_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p9 = Product.create(
    name: 'Stranger Things: Soundtrack Season 4 Cassette Tape', 
    description: 'A compilation album of music from the fourth season of the Netflix series, Stranger Things.', 
    category: 'Music', 
    price: 17.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/79077665_100_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p10 = Product.create(
    name: 'Dayglow - People In Motion Cassette Tape', 
    description: 'After racking up over a billion streams and selling out headline tours around the world, Dayglow returns with his third fun and colorful album, People In Motion.', 
    category: 'Music', 
    price: 15.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/79057915_066_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p11 = Product.create(
    name: 'Cipton Light-Up LED Rubber Official Football', 
    description: 'Light up football with colorful LEDs to keep the game going into the night.', 
    category: 'Fun + Games', 
    price: 35.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/69410702_080_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p12 = Product.create(
    name: 'Lite-Brite Classic Retro Light Up Peg Board', 
    description: 'Retro fun light up peg board by Lite-Brite.', 
    category: 'Fun + Games', 
    price: 30.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/69507796_095_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p13 = Product.create(
    name: 'Worlds Smallest Bop It', 
    description: 'Bop, pull and twist to the beat with this itty-bitty rendition of Hasbro’s Bop It.', 
    category: 'Fun + Games', 
    price: 18.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/69147890_001_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p14 = Product.create(
    name: '1990s Music Trivia Game', 
    description: 'Party like it’s the ‘90s all over again with this music trivia game complete with questions centered around the decade’s hit tracks.', 
    category: 'Fun + Games', 
    price: 8.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/68409325_048_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p15 = Product.create(
    name: 'Arctic Monkeys - Record', 
    description: 'The vibey fifth album that cemented the rockstar status of English indie band Arctic Monkeys, AM is available here on vinyl.', 
    category: 'Music', 
    price: 22.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/56861214_001_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p16 = Product.create(
    name: 'Kacey Musgraves - Golden Hour Record', 
    description: 'Kacey Musgraves returns with Golden Hour. Pressed to clear vinyl, it was co-written and co-produced by Ian Fitchuk and Daniel Tashian, layering a contemporary attitude over country leanings.', 
    category: 'Music', 
    price: 20.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/47079850_100_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p17 = Product.create(
    name: 'Lady Gaga - Joanne Record', 
    description: 'The fifth studio album from pop artist Lady Gaga. Available on vinyl & packaged in a double-gate fold.', 
    category: 'Music', 
    price: 34.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/68746049_001_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p18 = Product.create(
    name: 'The Lumineers - Brightside Record', 
    description: 'Back with their fourth studio album, Brightside is The Lumineers’s most spontaneous and joyous work yet. 2022, Dualtone Records.', 
    category: 'Music', 
    price: 25.98, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/68465129_001_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p19 = Product.create(
    name: 'Crosley Mint Cruiser Plus Bluetooth Record Player', 
    description: 'Bluetooth-compatible and portable vintage-inspired turntable housed in a mint faux leather briefcase from the experts at Crosley.', 
    category: 'Music', 
    price: 100.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/78338019_102_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p20 = Product.create(
    name: 'Craighill Tetra Solid Stainless Steel Puzzle', 
    description: 'The Tetra Puzzle is a beautiful and captivating mechanical puzzle composed of four identical pieces of stainless steel.', 
    category: 'Fun + Games', 
    price: 50.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/68837996_007_m?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p21 = Product.create(
    name: 'Marshall Stanmore II Bluetooth Speaker', 
    description: 'Marshall’s Stanmore is a compact active stereo speaker that yields clean and precise sound even at high levels.', 
    category: 'Music', 
    price: 350.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/52468238_001_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p22 = Product.create(
    name: 'We’re Not Really Strangers Card Game', 
    description: 'Get deep with this card game meant to enhance connections and create meaningful moments.', 
    category: 'Fun + Games', 
    price: 30.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/56905417_060_e?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p23 = Product.create(
    name: 'Tamagotchi V5 Game', 
    description: 'The OG ‘90s kid fave - the Tamagotchi is back to play in the original colors from 1997 for authentic throwback entertainment.', 
    category: 'Fun + Games', 
    price: 25.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/48920631_000_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p24 = Product.create(
    name: 'Tech Deck Fingerboard', 
    description: 'Tech Deck creates authentic 96mm fingerboards from our favorite skate companies.', 
    category: 'Fun + Games', 
    price: 7.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/63323430_095_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p25 = Product.create(
    name: '12 Notes On Life and Creativity', 
    description: 'Self-development guide by Quincy Jones with foreword by The Weeknd.', 
    category: 'Reading', 
    price: 26.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/69487072_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p26 = Product.create(
    name: 'The Crypto Book', 
    description: 'Learn about what crypto is, why it exists and more in this book by Siam Kidd, one of the world’s leading authorities on investing in cryptocurrencies.', 
    category: 'Reading', 
    price: 15.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/69487353_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p27 = Product.create(
    name: 'Epic Hikes of the Americas', 
    description: 'Prepare for your next adventure with this collection of 50 epic hikes across the Americas, featuring first-person accounts, difficulty levels, inspirational photography, maps and so much more.', 
    category: 'Reading', 
    price: 36.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/78419280_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p28 = Product.create(
    name: 'Falling Up', 
    description: 'Filled with unforgettable characters, Shel Silverstein’s Falling Up is a wondrous book full of drawings and poetry. ', 
    category: 'Reading', 
    price: 20.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/69454288_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p29 = Product.create(
    name: 'How to Garden When You Rent', 
    description: 'Transform your garden with this renter-friendly guide featuring easy-to-follow tips, tricks and techniques for good gardening maintenance.', 
    category: 'Reading', 
    price: 20.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/78419272_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p30 = Product.create(
    name: 'Make This Tonight', 
    description: 'Featuring 100 globally inspired meals, Make This Tonight offers the perfect starter kit to explore explosively flavorful recipes.', 
    category: 'Reading', 
    price: 36.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/78419173_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p31 = Product.create(
    name: 'You Need to Hear This', 
    description: 'With affirmations and advice for every moment of life, You Need To Hear This offers 365 pieces of advice throughout fun and colorful pages.', 
    category: 'Reading', 
    price: 17.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/69540326_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p32 = Product.create(
    name: 'Salad Freak', 
    description: 'Recipe book from Jess Damuck with foreword by Martha Stewart. Includes 100 recipes to add some fun to the everyday and create delicious & unique salads.', 
    category: 'Reading', 
    price: 30.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/69486454_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p33 = Product.create(
    name: 'Cricut Joy Machine', 
    description: 'Craft like a total pro with this compact Cricut machine, designed to cut and write so you can create custom labels, cards, banners and more.', 
    category: 'Tech', 
    price: 180.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/62530019_010_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p34 = Product.create(
    name: 'Kodak Luma Pocket Projector', 
    description: 'Turn your space into a home theater with this ultra-compact, pocket-sized projector from Kodak.', 
    category: 'Tech', 
    price: 190.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/54607452_010_e?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p35 = Product.create(
    name: 'Polaroid Pocket Photo Printer', 
    description: 'Display your favorite digital memories IRL with this pocket-sized, Bluetooth-enabled printer by Polaroid. Prints 2x3 photos on their compatible sticker-back photo paper (sold separately).', 
    category: 'Tech', 
    price: 100.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/59253286_010_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p36 = Product.create(
    name: 'Smoko Snoopy Light', 
    description: 'Channel the adventurous aviator spirit of everyone’s favorite neighborhood pup with this Snoopy light by Smoko. Powered by a USB cord, included.', 
    category: 'Tech', 
    price: 26.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/61038048_010_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p37 = Product.create(
    name: 'Polaroid Camera by Retrospekt', 
    description: 'To celebrate the 100th anniversary of Grand Canyon National Park, Retrospekt has teamed up with Parks Project and the Grand Canyon Conservancy to release a limited edition run of official Polaroid 600 instant analog cameras featuring artwork inspired by the park’s centennial.', 
    category: 'Tech', 
    price: 169.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/68802222_045_m?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p38 = Product.create(
    name: 'Checkerboard Karaoke Microphone', 
    description: 'Karaoke whenever, wherever with this microphone, featuring a built-in phone holder to pick your song and display the lyrics so you can belt it out, topped with a checkerboard print that gives every note an extra pop of style.', 
    category: 'Tech', 
    price: 36.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/64184807_001_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p39 = Product.create(
    name: 'Sunnylife Beach Cooler Speaker', 
    description: 'Enjoy your perfectly curated playlists alongside your favorite ice-cold beverage with this cooler from Sunnylife that doubles as a speaker.', 
    category: 'Tech', 
    price: 160.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/67331983_102_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
p40 = Product.create(
    name: 'Sunrise Alarm Clock', 
    description: 'Create a space for phone-free time thanks to this alarm clock with a gently illuminating sunrise effect that eases you into your day.', 
    category: 'Tech', 
    price: 38.00, 
    image: 'https://images.urbndata.com/is/image/UrbanOutfitters/64405616_010_f?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080',
)
    

