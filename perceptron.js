// Define the Perceptron class
class Perceptron {
  /**
   * Constructor to initialize the perceptron.
   * @param {number} n - The number of inputs for the perceptron.
   * @param {number} c - The learning rate (constant).
   */
  constructor(n, c) {
    // Initialize an array of weights with `n` elements
    this.weights = new Array(n);

    // Assign random initial weights between -1 and 1
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1);
    }

    // Store the learning rate
    this.c = c;
  }

  /**
   * Train the perceptron using the given inputs and desired output.
   * @param {Array<number>} inputs - The input vector.
   * @param {number} desired - The desired output (-1 or 1).
   */
  train(inputs, desired) {
    // Calculate the perceptron's guess using the current weights
    let guess = this.feedforward(inputs);

    // Compute the error (difference between desired and actual output)
    let error = desired - guess;

    // Adjust the weights based on the error and inputs
    for (let i = 0; i < this.weights.length; i++) {
      // Delta weight = learning rate * error * input value
      this.weights[i] += this.c * error * inputs[i];
    }
  }

  /**
   * Compute the perceptron's output (guess) for the given inputs.
   * @param {Array<number>} inputs - The input vector.
   * @returns {number} - The perceptron's guess (-1 or 1).
   */
  feedforward(inputs) {
    let sum = 0;

    // Compute the weighted sum of inputs
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    // Pass the sum through the activation function
    return this.activate(sum);
  }

  /**
   * Activation function to decide the output based on the sum.
   * @param {number} sum - The weighted sum of inputs.
   * @returns {number} - 1 if sum > 0, otherwise -1.
   */
  activate(sum) {
    return sum > 0 ? 1 : -1;
  }

  /**
   * Get the current weights of the perceptron.
   * @returns {Array<number>} - The array of weights.
   */
  getWeights() {
    return this.weights;
  }
}
