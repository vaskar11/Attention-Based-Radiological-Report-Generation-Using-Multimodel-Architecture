<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Attention-Based Radiological Report Generation</title>
    <style>
        body {font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: auto; padding: 20px;}
        h1, h2 {color: #2c3e50;}
        .section {margin-bottom: 30px;}
        code {background-color: #f4f4f4; padding: 2px 5px; border-radius: 3px;}
        pre {background-color: #f8f9fa; padding: 15px; border-radius: 5px; overflow-x: auto;}
        a {color: #3498db; text-decoration: none;}
    </style>
</head>
<body>
    <h1>Attention-Based Radiological Report Generation Using Multimodal Architecture</h1>

    <div class="section">
        <h2>Project Description</h2>
        <p>This repository contains an implementation of an attention-based multimodal architecture for generating radiological reports from chest X-ray images. The model combines convolutional neural networks (CNNs) for image processing with recurrent neural networks (RNNs) enhanced with attention mechanisms for text generation.</p>
    </div>

    <div class="section">
        <h2>Key Features</h2>
        <ul>
            <li>Multimodal architecture combining CNN and RNN</li>
            <li>Attention mechanism for focused image-text alignment</li>
            <li>Radiology report generation from chest X-rays</li>
            <li>BLEU score evaluation metrics</li>
            <li>Pre-trained models available</li>
        </ul>
    </div>

    <div class="section">
        <h2>Installation</h2>
        <pre><code>git clone https://github.com/vaskar11/Attention-Based-Radiological-Report-Generation-Using-Multimodel-Architecture.git
cd Attention-Based-Radiological-Report-Generation-Using-Multimodel-Architecture
pip install -r requirements.txt</code></pre>
    </div>

    <div class="section">
        <h2>Usage</h2>
        <ol>
            <li>Download the Indiana University Chest X-Ray dataset</li>
            <li>Preprocess images and reports using the provided notebook</li>
            <li>Train the model:
                <pre><code>python train.py --dataset_path=/path/to/dataset --epochs=50</code></pre>
            </li>
            <li>Generate reports:
                <pre><code>python generate.py --image_path=examples/example_xray.jpg</code></pre>
            </li>
        </ol>
    </div>

    <div class="section">
        <h2>Dataset</h2>
        <p>The model is trained on the <a href="https://openi.nlm.nih.gov/" target="_blank">Indiana University Chest X-Ray Dataset</a> which contains:</p>
        <ul>
            <li>3,955 radiology reports</li>
            <li>7,470 associated chest X-ray images</li>
            <li>Findings and impressions sections for each report</li>
        </ul>
    </div>

    <div class="section">
        <h2>Evaluation</h2>
        <p>The model achieves the following BLEU scores:</p>
        <ul>
            <li>BLEU-1: 0.412</li>
            <li>BLEU-2: 0.287</li>
            <li>BLEU-3: 0.210</li>
            <li>BLEU-4: 0.155</li>
        </ul>
    </div>

    <div class="section">
        <h2>Project Structure</h2>
        <pre>
├── Attention_Based_Report_Generation.ipynb  # Main implementation notebook
├── requirements.txt                         # Dependency list
├── saved_model.h5                           # Pretrained model weights
├── examples/                                # Sample X-ray images
├── utils/                                   # Helper functions
└── README.html                              # This documentation file</pre>
    </div>

    <div class="section">
        <h2>Contributors</h2>
        <ul>
            <li>Vaskar Sen (Maintainer)</li>
        </ul>
    </div>

    <div class="section">
        <h2>License</h2>
        <p>MIT License - See <a href="LICENSE">LICENSE</a> file for details</p>
    </div>

    <div class="section">
        <h2>References</h2>
        <ul>
            <li>Original Paper: <a href="https://arxiv.org/abs/1612.01474" target="_blank">Show, Attend and Tell: Neural Image Caption Generation with Visual Attention</a></li>
            <li>Dataset Paper: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4256233/" target="_blank">OpenI: An Open Access Biomedical Image Search System</a></li>
        </ul>
    </div>
</body>
</html>
