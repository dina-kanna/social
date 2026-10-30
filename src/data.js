
export const people = [
  {
    id: 1,
    name: 'Maya Chen',
    handle: '@mayacreates',
    avatar: 'https://i.pravatar.cc/100?img=47',
    bio: 'Designing little things for a better internet ✨',
    followers: '12.8k',
    following: '684',
    verified: true
  },
  {
    id: 2,
    name: 'Jordan Lee',
    handle: '@jordanlee',
    avatar: 'https://i.pravatar.cc/100?img=12',
    bio: 'Photographer · city wanderer 📸',
    followers: '8.2k',
    following: '512'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    handle: '@aishap',
    avatar: 'https://i.pravatar.cc/100?img=44',
    bio: 'Coffee, code & weekend hikes ☕',
    followers: '5.4k',
    following: '920'
  },
  {
    id: 4,
    name: 'Noah Williams',
    handle: '@noahw',
    avatar: 'https://i.pravatar.cc/100?img=14',
    bio: 'Making music and memories. 🎧',
    followers: '3.1k',
    following: '401'
  },
  {
    id: 5,
    name: 'Olivia Smith',
    handle: '@oliviasmith',
    avatar: 'https://i.pravatar.cc/100?img=32',
    bio: 'Living for sunsets and new adventures 🌅',
    followers: '9.6k',
    following: '730',
    verified: true
  },
  {
    id: 6,
    name: 'Ethan Carter',
    handle: '@ethancarter',
    avatar: 'https://i.pravatar.cc/100?img=11',
    bio: 'Fitness, travel and everyday motivation 💪',
    followers: '6.7k',
    following: '589'
  },
  {
    id: 7,
    name: 'Sophia Garcia',
    handle: '@sophiag',
    avatar: 'https://i.pravatar.cc/100?img=49',
    bio: 'Art lover | Dreamer | Creative soul 🎨',
    followers: '15.2k',
    following: '812',
    verified: true
  },
  {
    id: 8,
    name: 'Liam Anderson',
    handle: '@liamanderson',
    avatar: 'https://i.pravatar.cc/100?img=13',
    bio: 'Exploring the world one trip at a time 🌍',
    followers: '4.8k',
    following: '620'
  },
  {
    id: 9,
    name: 'Emma Wilson',
    handle: '@emmawilson',
    avatar: 'https://i.pravatar.cc/100?img=45',
    bio: 'Fashion, lifestyle and good vibes ✨',
    followers: '11.3k',
    following: '950'
  },
  {
    id: 10,
    name: 'Arjun Kumar',
    handle: '@arjunk',
    avatar: 'https://i.pravatar.cc/100?img=15',
    bio: 'Developer by day, gamer by night 🎮',
    followers: '2.9k',
    following: '340'
  },
  {
    id: 11,
    name: 'Isabella Brown',
    handle: '@isabellab',
    avatar: 'https://i.pravatar.cc/100?img=48',
    bio: 'Finding beauty in the little things 🌸',
    followers: '7.5k',
    following: '680'
  },
  {
    id: 12,
    name: 'Daniel Martin',
    handle: '@danielm',
    avatar: 'https://i.pravatar.cc/100?img=60',
    bio: 'Music, coffee and late night drives 🚗',
    followers: '3.8k',
    following: '420'
  }
];

export const stories = [
  {
    name: 'Your story',
    avatar: 'https://i.pravatar.cc/100?img=5',
    own: true
  },
  { name: 'Maya', avatar: people[0].avatar },
  { name: 'Jordan', avatar: people[1].avatar },
  { name: 'Aisha', avatar: people[2].avatar },
  { name: 'Noah', avatar: people[3].avatar },
  { name: 'Olivia', avatar: people[4].avatar },
  { name: 'Ethan', avatar: people[5].avatar },
  { name: 'Sophia', avatar: people[6].avatar },
  { name: 'Liam', avatar: people[7].avatar },
  { name: 'Emma', avatar: people[8].avatar },
  { name: 'Arjun', avatar: people[9].avatar },
  { name: 'Isabella', avatar: people[10].avatar },
  { name: 'Daniel', avatar: people[11].avatar }
];

export const initialPosts = [
  {
    id: 1,
    user: people[0],
    time: '2 hours ago',
    text: 'A little color, a little sunshine, and a fresh perspective. Hope your week is off to a lovely start 🌿',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000&q=85',
    likes: 1284,
    comments: 42,
    liked: false
  },
  {
    id: 2,
    user: people[1],
    time: '5 hours ago',
    text: 'Found my new favorite corner of the city. Taking the long way home is always worth it. 📸',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1000&q=85',
    likes: 846,
    comments: 18,
    liked: true
  },
  {
    id: 3,
    user: people[2],
    time: '1 day ago',
    text: 'Slow mornings and strong coffee. That is the whole post. ☕',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=85',
    likes: 532,
    comments: 27,
    liked: false
  },
  {
    id: 4,
    user: people[4],
    time: '1 day ago',
    text: 'Chasing golden hour and collecting memories. Some moments deserve to last forever. 🌅',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&q=85',
    likes: 2156,
    comments: 86,
    liked: false
  },
  {
    id: 5,
    user: people[5],
    time: '2 days ago',
    text: 'Small progress is still progress. Keep showing up for yourself every single day! 💪',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=85',
    likes: 967,
    comments: 34,
    liked: false
  },
  {
    id: 6,
    user: people[6],
    time: '2 days ago',
    text: 'A little creativity can change the way you see the world. Working on something special! 🎨',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1000&q=85',
    likes: 1842,
    comments: 63,
    liked: true
  },
  {
    id: 7,
    user: people[7],
    time: '3 days ago',
    text: 'New places, new faces, unforgettable experiences. Never stop exploring. 🌍',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=85',
    likes: 1432,
    comments: 51,
    liked: false
  },
  {
    id: 8,
    user: people[8],
    time: '3 days ago',
    text: 'Feeling confident, feeling happy, and choosing to be myself every day. ✨',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=85',
    likes: 2789,
    comments: 112,
    liked: false
  },
  {
    id: 9,
    user: people[9],
    time: '4 days ago',
    text: 'Late night coding sessions hit different when the coffee is strong. Building something cool! 💻',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=85',
    likes: 634,
    comments: 29,
    liked: false
  },
  {
    id: 10,
    user: people[10],
    time: '4 days ago',
    text: 'Flowers remind us that beautiful things take time to grow. Be patient with yourself. 🌸',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000&q=85',
    likes: 1956,
    comments: 74,
    liked: true
  },
  {
    id: 11,
    user: people[11],
    time: '5 days ago',
    text: 'Good music, open roads and no particular destination. Sometimes that is all you need. 🎶',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1000&q=85',
    likes: 752,
    comments: 31,
    liked: false
  },
  {
    id: 12,
    user: people[3],
    time: '6 days ago',
    text: 'Just dropped a new track! Been working on this one for weeks. Let me know what you think 🎧',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1000&q=85',
    likes: 1108,
    comments: 58,
    liked: false
  }
];
