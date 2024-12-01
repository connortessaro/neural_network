# Perceptron Visualization with Training Data

This project implements a simple **Perceptron** to classify points in 2D space and visualizes the training process. The Perceptron learns to classify points based on their position relative to a predefined linear boundary.

---

## Features

- **Perceptron Implementation**: A lightweight machine learning model for binary classification.
- **Interactive Visualization**: Displays the decision boundary as it evolves during training.
- **Training Data Generation**: Generates 2000 random points classified based on a predefined linear function \( y = 0.3x + 0.4 \).
- **Real-Time Learning**: Updates the Perceptron's weights on each frame and shows the decision boundary adapting to the data.

---

## How It Works

### Training Data
- **Points**: 2000 random points are generated within the bounds:
  - \( x \in [-1, 1] \)
  - \( y \in [-1, 1] \)
- **Classification**:
  - Points are classified as `-1` if below the line \( y = 0.3x + 0.4 \).
  - Points are classified as `1` if above the line.
- Each training example is stored as:
  ```javascript
  {
    input: [x, y, 1], // x, y coordinates and bias term
    output: -1 or 1   // Classification label
  }
  ```

### Perceptron Model
- **Structure**:
  - Three inputs: \( x \), \( y \), and a bias term.
  - Weights are initialized randomly between \(-1\) and \(1\).
- **Learning**:
  - The Perceptron adjusts its weights based on the error between the desired output and its prediction using the formula:
    \[
    \text{new weight} = \text{old weight} + \text{learning rate} \times \text{error} \times \text{input value}
    \]
- **Activation**:
  - Uses a step function to determine the output:
    - \( 1 \) if the weighted sum is positive.
    - \( -1 \) if the weighted sum is negative.

### Visualization
1. **Target Line**: \( y = 0.3x + 0.4 \) is drawn in white.
2. **Decision Boundary**: The Perceptron's current boundary is displayed, evolving as it trains.
3. **Data Points**:
   - Points are shown as circles:
     - Filled if the Perceptron guesses their class correctly.
     - Unfilled if it guesses incorrectly.

---

## Code Overview

### Perceptron Class
Handles the core logic:
- Weight initialization.
- Training with the `train(inputs, desired)` method.
- Classification with the `feedforward(inputs)` method.
- Access to weights via the `getWeights()` method.

### Main Code
1. **Setup**:
   - Initializes the Perceptron with a learning rate.
   - Generates 2000 training points.
2. **Draw**:
   - Visualizes the training process frame-by-frame.
   - Continuously updates the Perceptron's weights using the training data.

---

## Usage

1. Copy the code into an environment that supports **p5.js** (e.g., the p5.js web editor or a local setup).
2. Run the program to see the Perceptron classify the training data and adapt its decision boundary in real time.

---

## Example Output

- A white line represents the target function \( y = 0.3x + 0.4 \).
- The Perceptron’s decision boundary starts randomly and aligns with the target line as it trains.
- Points are shown as small circles:
  - **Filled**: Correctly classified.
  - **Unfilled**: Misclassified.

---

## Concepts Demonstrated

- Binary classification using a Perceptron.
- Supervised learning and weight updates.
- Visualization of machine learning in real-time.

---

## Customization

- **Adjust the Learning Rate**: Modify the Perceptron’s learning rate in the constructor:
  ```javascript
  ptron = new Perceptron(3, 0.001);
  ```
- **Change the Line Function**: Update the function \( f(x) \) to use a different line:
  ```javascript
  function f(x) {
    return 0.5 * x - 0.2; // Example of a new line
  }
  ```
- **Modify the Training Data**: Change the number of training points or the range of \( x \) and \( y \) values:
  ```javascript
  let training = new Array(1000); // Use 1000 points instead of 2000
  ```

---

## Dependencies

- **p5.js Library**: Required for visualization and random number generation. Include it in your environment:
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
  ```

---

Feel free to experiment with the code to understand the basics of Perceptron-based learning and visualization! 🎉
