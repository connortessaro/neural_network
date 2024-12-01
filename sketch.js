// Initialize an array to store training data (2000 points)
let training = new Array(2000);

// Perceptron instance
let ptron;

// Counter to keep track of the current training example
let count = 0;

// Define the bounds for x and y
let xmin = -1;
let ymin = -1;
let xmax = 1;
let ymax = 1;

// Function to represent the line y = 0.3x + 0.4
function f(x) {
  let y = 0.3 * x + 0.4; // Linear equation
  return y;
}

// Setup function to initialize canvas and create training data
function setup() {
  createCanvas(400, 400); // Create a 400x400 pixel canvas
  ptron = new Perceptron(3, 0.001); // Initialize perceptron with 3 inputs and a learning rate of 0.001

  // Generate training data
  for (let i = 0; i < training.length; i++) {
    let x = random(xmin, xmax); // Random x value in the range [xmin, xmax]
    let y = random(ymin, ymax); // Random y value in the range [ymin, ymax]
    let answer = y < f(x) ? -1 : 1; // Determine the correct output (-1 if below the line, 1 if above)
    training[i] = {
      input: [x, y, 1], // Input vector for the perceptron (x, y, and a bias term)
      output: answer // Expected output
    };
  }
}

// Draw function to visualize training and perceptron learning
function draw() {
  background(0); // Clear the canvas with a black background

  // Draw the target line (y = 0.3x + 0.4)
  strokeWeight(1);
  stroke(255);
  let x1 = map(xmin, xmin, xmax, 0, width); // Map xmin to canvas coordinates
  let y1 = map(f(xmin), ymin, ymax, height, 0); // Map f(xmin) to canvas coordinates
  let x2 = map(xmax, xmin, xmax, 0, width); // Map xmax to canvas coordinates
  let y2 = map(f(xmax), ymin, ymax, height, 0); // Map f(xmax) to canvas coordinates
  line(x1, y1, x2, y2); // Draw the line

  // Draw the perceptron's current decision boundary
  stroke(255);
  strokeWeight(2);
  let weights = ptron.getWeights(); // Get the perceptron's weights
  x1 = xmin;
  y1 = (-weights[2] - weights[0] * x1) / weights[1]; // Solve for y in terms of the weights
  x2 = xmax;
  y2 = (-weights[2] - weights[0] * x2) / weights[1];

  // Map the decision boundary points to canvas coordinates
  x1 = map(x1, xmin, xmax, 0, width);
  y1 = map(y1, ymin, ymax, height, 0);
  x2 = map(x2, xmin, xmax, 0, width);
  y2 = map(y2, ymin, ymax, height, 0);
  line(x1, y1, x2, y2); // Draw the decision boundary

  // Train the perceptron on one training example per frame
  ptron.train(training[count].input, training[count].output);
  count = (count + 1) % training.length; // Increment the training index (looping back to 0)

  // Visualize the training data
  for (let i = 0; i < count; i++) {
    stroke(255);
    strokeWeight(1);
    fill(255);
    let guess = ptron.feedforward(training[i].input); // Perceptron's guess for the input
    if (guess > 0) noFill(); // Draw unfilled circles for positive guesses

    // Map training points to canvas coordinates
    let x = map(training[i].input[0], xmin, xmax, 0, width);
    let y = map(training[i].input[1], ymin, ymax, height, 0);
    ellipse(x, y, 8, 8); // Draw the training point
  }
}
