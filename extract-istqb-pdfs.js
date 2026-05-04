const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf');

const istqbFolder = path.join(__dirname, 'Documentation', 'ISTQB');
const outputFolder = path.join(__dirname, 'Documentation', 'ISTQB_Markdown');

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const pdfFiles = [
    'ISTQB-CT-AcT_Syllabus_v1.0_2019.pdf',
    'ISTQB-CT-SEC_Syllabus_v1.0_2016.pdf',
    'ISTQB-CT-UT_Syllabus_v1.0_2018.pdf',
    'ISTQB-CTAL-ATT_Syllabus_v1.1.pdf',
    'ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf',
    'ISTQB-CTAL-TTA_Syllabus_v4.0.pdf',
    'ISTQB_CT-ATLaS_Syllabus_v2.0.pdf',
    'ISTQB_CT-TAS_Syllabus_v1.0.pdf',
    'ISTQB_CTAL-TAE_Syllabus_v2.0.pdf',
    'ISTQB_CTAL-TM_Syllabus_v3.0_zKjKsaN.pdf',
    'ISTQB_CTFL_Syllabus_v4.0.1.pdf',
    'ISTQB_STE_v1.0.1-Syllabus.pdf'
];

async function extractPDF(filePath) {
    try {
        const fileBuffer = fs.readFileSync(filePath);
        const pdf = await pdfjsLib.getDocument({ data: fileBuffer }).promise;
        let text = '';

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            text += pageText + '\n';
        }

        return text;
    } catch (error) {
        console.error(`Error extracting ${filePath}:`, error.message);
        return null;
    }
}

async function processPDFs() {
    console.log('Starting PDF extraction process...\n');

    for (const pdfFile of pdfFiles) {
        const pdfPath = path.join(istqbFolder, pdfFile);

        if (!fs.existsSync(pdfPath)) {
            console.log(`⚠ Skipping ${pdfFile} - file not found`);
            continue;
        }

        console.log(`📄 Processing: ${pdfFile}`);
        const text = await extractPDF(pdfPath);

        if (text) {
            const mdFileName = pdfFile.replace('.pdf', '.md');
            const outputPath = path.join(outputFolder, mdFileName);
            fs.writeFileSync(outputPath, `# ${pdfFile}\n\n${text}`);
            console.log(`✓ Saved: ${mdFileName}\n`);
        }
    }

    console.log('✓ PDF extraction complete!');
}

processPDFs().catch(console.error);
