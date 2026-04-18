# CipherStack

CipherStack is a node-based cascade encryption builder that allows users to visually create multi-layer encryption pipelines using different cipher algorithms. Users can add cipher nodes, configure each one independently, execute encryption or decryption, and inspect intermediate outputs at every stage of the pipeline.

The platform demonstrates how layered encryption works by chaining multiple ciphers together, where the output of one node becomes the input of the next node.

---

## Live Demo

https://cipher-stack.vercel.app/

---

## Features

### Pipeline Builder

- Add multiple cipher nodes
- Remove nodes from the pipeline
- Reorder nodes using Up / Down controls
- Configure each node independently
- Minimum 3-node validation before execution

### Encryption & Decryption

- Encrypt plaintext through the pipeline
- Decrypt ciphertext using reverse traversal
- Recover original plaintext using the same node configuration
- Final encrypted / decrypted output displayed instantly

### Intermediate Visibility

- View step-by-step input and output for each node
- Inspect how text transforms across the encryption chain

### Security Meter

- Real-time pipeline strength score
- Based on layering, configurable nodes, and cipher diversity
- Helps users understand stronger encryption combinations

### Supported Ciphers

#### Configurable Ciphers

- Caesar Cipher (shift amount)
- XOR Cipher (key string)
- Vigenère Cipher (keyword)

#### Additional Ciphers

- Reverse
- Base64

---

## How It Works

### Encrypt Mode

Plaintext enters the first node and moves forward through the pipeline.

```text
Input → Node 1 → Node 2 → Node 3 → Final Ciphertext
```

### Decrypt Mode

Ciphertext enters the last node first and moves backward using inverse operations.

```text
Ciphertext → Node 3 → Node 2 → Node 1 → Original Plaintext
```

### Example Pipeline

- Caesar Shift (+3)
- XOR Key = abc
- Vigenère Key = SECRET

**Encrypt:**

```
hello → encrypted output
```

**Decrypt:**

```
encrypted output → hello
```

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zustand
- Lucide React

---

## Project Structure

```
src/
├── app/
├── components/
│   ├── layout/
│   ├── cipher-library/
│   ├── pipeline/
│   ├── io/
│   └── ui/
├── lib/
│   ├── ciphers/
│   ├── pipeline/
│   └── utils/
├── store/
├── types/
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/yourusername/cipherstack-hackathon.git
cd cipherstack-hackathon
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Open Browser

```
http://localhost:3000
```

### Production Build

```bash
npm run build
```

---

## Usage Guide

1. Add at least 3 cipher nodes
2. Configure keys / shift values
3. Enter input text
4. Select Encrypt or Decrypt mode
5. Run the pipeline
6. View final output and intermediate results

---

## Future Improvements

- Drag and drop node sorting
- Save / load pipeline presets
- Export pipeline JSON
- Additional cipher algorithms
- Copy output button
- Mobile responsive optimization
- Animated data flow visualization

---

## License

This project is open-source and available for educational and personal use.
