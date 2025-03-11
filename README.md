
# Attention-Based Automated Radiological Report Generation Using Multimodal Architecture

## Overview

This project presents an AI-driven system designed to automate the generation of radiological reports using multimodal deep learning architecture. By leveraging attention mechanisms, the model processes chest X-ray images to generate clinically accurate reports, aiming to assist radiologists and improve healthcare accessibility, particularly in resource-limited settings.

## Features

- **Multimodal Learning**: Utilizes image and text data for enhanced report generation.
- **Attention Mechanism**: Employs Bahdanau attention to improve text coherence and accuracy.
- **Automated Report Generation**: Produces structured medical reports from X-ray images.
- **Beam Search Optimization**: Enhances text quality by selecting the most probable output sequences.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vaskar11/Attention-Based-Radiological-Report-Generation-Using-Multimodal-Architecture.git
   cd Attention-Based-Radiological-Report-Generation-Using-Multimodal-Architecture
   ```

2. **Create a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

## Dataset

- **Source**: Indiana University X-ray dataset
- **Size**: 7,471 chest X-ray images, 3,955 corresponding text reports
- **Format**: PNG images, XML text reports

## Model Architecture

- **Encoder**: CheXNet (DenseNet-121) for image feature extraction.
- **Decoder**: GRU-based recurrent network with attention mechanism.
- **Attention Mechanism**: Helps the model focus on relevant image regions for improved text generation.

## Usage

1. **Preprocess Data**:
   ```bash
   python preprocess.py --data_path data/
   ```
2. **Train the Model**:
   ```bash
   python train.py --config configs/train_config.yaml
   ```
3. **Generate Reports**:
   ```bash
   python generate.py --input data/sample_image.png --output results/report.txt
   ```

## Evaluation

- **Metrics**: BLEU scores
- **Results**:
  - BLEU-1: 0.3787
  - BLEU-2: 0.2418
  - BLEU-3: 0.1735
  - BLEU-4: 0.1026

## Limitations

- Limited training data affects report accuracy.
- Model biases towards normal cases due to dataset imbalance.

## Future Enhancements

- Train on larger datasets (e.g., MIMIC-CXR) for better generalization.
- Integrate advanced architectures like ViT and LLM for improved feature extraction.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## References

- Bahdanau et al., "Neural Machine Translation by Jointly Learning to Align and Translate"
- CheXNet: Deep Learning Algorithm for Chest X-ray Diagnosis
```


