export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  cookTime: string;
  servings: number;
  difficulty: string;
}

export const categories = [
  { id: "all", name: "All Recipes", icon: "🍽️" },
  { id: "breakfast", name: "Breakfast", icon: "🥞" },
  { id: "lunch", name: "Lunch", icon: "🥗" },
  { id: "dinner", name: "Dinner", icon: "🍝" },
  { id: "dessert", name: "Dessert", icon: "🍰" },
  { id: "appetizer", name: "Appetizer", icon: "🥟" },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    slug: "classic-margherita-pizza",
    excerpt:
      "Learn how to make authentic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
    content: `
# Classic Margherita Pizza

This authentic Italian pizza is a celebration of simple, quality ingredients. The key to a perfect Margherita is using the freshest mozzarella, ripe tomatoes, and fragrant basil.

## Ingredients

- 500g pizza dough
- 200g fresh mozzarella
- 4 ripe tomatoes
- Fresh basil leaves
- Extra virgin olive oil
- Salt and pepper to taste

## Instructions

1. Preheat your oven to 475°F (245°C).
2. Roll out the pizza dough on a floured surface.
3. Spread tomato sauce evenly over the dough.
4. Add torn mozzarella pieces.
5. Bake for 12-15 minutes until the crust is golden.
6. Top with fresh basil and drizzle with olive oil.

Enjoy your homemade pizza!
    `,
    image: "/delicious-margherita-pizza-with-fresh-basil-and-me.jpg",
    category: "dinner",
    author: "Chef Marco",
    date: "2024-01-15",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
  },
  {
    id: "2",
    title: "Fluffy Pancakes",
    slug: "fluffy-pancakes",
    excerpt:
      "Start your morning right with these incredibly fluffy and delicious pancakes.",
    content: `
# Fluffy Pancakes

These pancakes are light, airy, and absolutely delicious. Perfect for a weekend breakfast!

## Ingredients

- 2 cups all-purpose flour
- 2 tablespoons sugar
- 2 teaspoons baking powder
- 1 teaspoon salt
- 2 eggs
- 1.5 cups milk
- 4 tablespoons melted butter

## Instructions

1. Mix dry ingredients in a large bowl.
2. Whisk together eggs, milk, and melted butter.
3. Combine wet and dry ingredients until just mixed.
4. Heat a griddle over medium heat.
5. Pour 1/4 cup batter for each pancake.
6. Cook until bubbles form, then flip.
7. Serve with maple syrup and butter.
    `,
    image: "/stack-of-fluffy-golden-pancakes-with-maple-syrup-a.jpg",
    category: "breakfast",
    author: "Chef Sarah",
    date: "2024-01-20",
    cookTime: "20 mins",
    servings: 4,
    difficulty: "Easy",
  },
  {
    id: "3",
    title: "Caesar Salad",
    slug: "caesar-salad",
    excerpt:
      "A crisp and refreshing Caesar salad with homemade dressing and crunchy croutons.",
    content: `
# Caesar Salad

This classic salad features crisp romaine lettuce, parmesan cheese, and a creamy homemade dressing.

## Ingredients

- 1 large head romaine lettuce
- 1/2 cup parmesan cheese
- 1 cup croutons
- 2 cloves garlic
- 2 anchovy fillets
- 1 egg yolk
- 2 tablespoons lemon juice
- 1/2 cup olive oil

## Instructions

1. Make the dressing by blending garlic, anchovies, egg yolk, and lemon juice.
2. Slowly add olive oil while blending.
3. Tear lettuce into bite-sized pieces.
4. Toss lettuce with dressing.
5. Top with parmesan and croutons.
    `,
    image: "/fresh-caesar-salad-with-parmesan-cheese-and-golden.jpg",
    category: "lunch",
    author: "Chef Julia",
    date: "2024-01-25",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Easy",
  },
  {
    id: "4",
    title: "Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    excerpt: "Indulge in this decadent chocolate dessert with a molten center.",
    content: `
# Chocolate Lava Cake

This rich, decadent dessert features a gooey chocolate center that flows out when you cut into it.

## Ingredients

- 200g dark chocolate
- 100g butter
- 2 eggs
- 2 egg yolks
- 50g sugar
- 30g flour
- Vanilla ice cream for serving

## Instructions

1. Preheat oven to 425°F (220°C).
2. Melt chocolate and butter together.
3. Whisk eggs, yolks, and sugar until thick.
4. Fold in chocolate mixture and flour.
5. Pour into greased ramekins.
6. Bake for 12-14 minutes.
7. Serve immediately with ice cream.
    `,
    image: "/lava-cake.png",
    category: "dessert",
    author: "Chef Pierre",
    date: "2024-02-01",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Medium",
  },
  {
    id: "5",
    title: "Spring Rolls",
    slug: "spring-rolls",
    excerpt: "Crispy and delicious spring rolls filled with fresh vegetables.",
    content: `
# Spring Rolls

These crispy appetizers are filled with fresh vegetables and served with a tangy dipping sauce.

## Ingredients

- 12 spring roll wrappers
- 2 cups shredded cabbage
- 1 cup julienned carrots
- 1/2 cup bean sprouts
- 2 cloves garlic, minced
- Soy sauce
- Oil for frying

## Instructions

1. Sauté vegetables with garlic until tender.
2. Season with soy sauce.
3. Place filling on wrapper and roll tightly.
4. Seal edges with water.
5. Deep fry until golden brown.
6. Serve with sweet chili sauce.
    `,
    image: "/crispy-golden-spring-rolls-with-sweet-chili-dippin.jpg",
    category: "appetizer",
    author: "Chef Lin",
    date: "2024-02-05",
    cookTime: "40 mins",
    servings: 6,
    difficulty: "Medium",
  },
  {
    id: "6",
    title: "Grilled Salmon",
    slug: "grilled-salmon",
    excerpt: "Perfectly grilled salmon with a honey-garlic glaze.",
    content: `
# Grilled Salmon

This healthy and delicious salmon is glazed with honey and garlic for the perfect balance of flavors.

## Ingredients

- 4 salmon fillets
- 3 tablespoons honey
- 2 tablespoons soy sauce
- 3 cloves garlic, minced
- 1 tablespoon olive oil
- Lemon wedges
- Fresh dill

## Instructions

1. Mix honey, soy sauce, and garlic for the glaze.
2. Brush salmon with olive oil.
3. Grill salmon for 4-5 minutes per side.
4. Brush with glaze during the last 2 minutes.
5. Garnish with dill and serve with lemon wedges.
    `,
    image: "/grilled-salmon-fillet-with-herbs-lemon-and-honey-g.jpg",
    category: "dinner",
    author: "Chef Alex",
    date: "2024-02-10",
    cookTime: "20 mins",
    servings: 4,
    difficulty: "Easy",
  },
];
