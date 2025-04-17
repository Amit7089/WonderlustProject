const sampleListings = [
    {
      title: "Cozy Beach House",
      description: "Beautiful house near the beach",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1CP0id1zUGmhmAooj03ocSBipihju7CjCmmGs_LPwhA="
      },
      price: 1500,
      location: "Goa",
      country: "India"
    },
    {
      title: "Luxury Mountain Cabin",
      description: "Cabin in the mountains",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
      },
      price: 2500,
      location: "Manali",
      country: "India"
    },
    {
      title: "Modern City Apartment",
      description: "Apartment in the heart of the city",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D"
      },
      price: 3500,
      location: "Mumbai",
      country: "India"
    },
    {
      title: "Tropical Paradise Villa",
      description: "Luxury villa with ocean view",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      price: 5000,
      location: "Kerala",
      country: "India"
    },
    {
      title: "Snowy Mountain Retreat",
      description: "Cozy retreat in snowy mountains",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww"
      },
      price: 4000,
      location: "Shimla",
      country: "India"
    },
    {
      title: "Seaside Cottage",
      description: "Charming cottage near the sea",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fHww"
      },
      price: 1800,
      location: "Pondicherry",
      country: "India"
    },
    {
      title: "Desert Safari Camp",
      description: "Luxury camp in the desert",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww"
      },
      price: 3000,
      location: "Jaisalmer",
      country: "India"
    },
    {
      title: "Riverside Homestay",
      description: "Traditional home by the river",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fHww"
      },
      price: 2200,
      location: "Rishikesh",
      country: "India"
    },
    {
      title: "Treehouse Adventure",
      description: "Stay in a treehouse in the jungle",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2UlMjBsb2NhbHxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 2800,
      location: "Meghalaya",
      country: "India"
    },
    {
      title: "Luxury Penthouse",
      description: "Modern penthouse with city view",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/144292803/photo/happy-neighbourhood.webp?a=1&b=1&s=612x612&w=0&k=20&c=zdyIJ4py_AukqDTbc1b9PdceRpoMLx4pAuiqtKnSxjs="
      },
      price: 8000,
      location: "Delhi",
      country: "India"
    },
    {
      title: "Hilltop Bungalow",
      description: "Bungalow with a stunning view",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/2155879397/photo/house-in-a-charming-neighborhood-with-stunning-sidewalk-landscaping.webp?a=1&b=1&s=612x612&w=0&k=20&c=LlqEpFyrJBmSZ8v3CshnYJo9X00p8Y7wGv3mIDNqpZ4="
      },
      price: 3500,
      location: "Munnar",
      country: "India"
    },
    {
      title: "Jungle Safari Lodge",
      description: "Stay close to wildlife",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1190230425/photo/modern-american-houses.webp?a=1&b=1&s=612x612&w=0&k=20&c=3Un8GN2kCUiYJvSCqr6BEK4RwcejvN96ujivaL7e994="
      },
      price: 4500,
      location: "Jim Corbett",
      country: "India"
    },
    {
      title: "Heritage Palace Hotel",
      description: "Experience royal luxury",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1591170715502-fbc32adc4f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
      },
      price: 7000,
      location: "Jaipur",
      country: "India"
    },
    {
      title: "Farmhouse Retreat",
      description: "Relax in a peaceful farmhouse",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 2000,
      location: "Punjab",
      country: "India"
    },
    {
      title: "Boathouse Stay",
      description: "Unique experience in a boathouse",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 5000,
      location: "Alleppey",
      country: "India"
    },
    {
      title: "Cultural Haveli",
      description: "Traditional Rajasthani Haveli",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1171744291/photo/luxury-house-with-pool-and-terrace-for-relaxing.jpg?s=612x612&w=0&k=20&c=JjyYUhKoFafg1jq78uBxJnUQwOkMZXuuzEJ1p0q4opI="
      },
      price: 3800,
      location: "Udaipur",
      country: "India"
    },
    {
      title: "Lakeside Cottage",
      description: "Cozy stay near the lake",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1171744291/photo/luxury-house-with-pool-and-terrace-for-relaxing.jpg?s=612x612&w=0&k=20&c=JjyYUhKoFafg1jq78uBxJnUQwOkMZXuuzEJ1p0q4opI="
      },
      price: 2600,
      location: "Nainital",
      country: "India"
    },
    {
      title: "Eco-Friendly Retreat",
      description: "Sustainable living in nature",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1CP0id1zUGmhmAooj03ocSBipihju7CjCmmGs_LPwhA="
      },
      price: 3200,
      location: "Coorg",
      country: "India"
    },
    {
      title: "Countryside Villa",
      description: "Peaceful countryside escape",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1CP0id1zUGmhmAooj03ocSBipihju7CjCmmGs_LPwhA="
      },
      price: 2800,
      location: "Himachal Pradesh",
      country: "India"
    },
    {
      title: "Island Beach Resort",
      description: "Luxury stay on a private island",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1CP0id1zUGmhmAooj03ocSBipihju7CjCmmGs_LPwhA="
      },
      price: 9000,
      location: "Andaman & Nicobar",
      country: "India"
    }
  ];
  
  module.exports = { data: sampleListings };
  