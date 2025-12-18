const admin = require('firebase-admin');
const serviceAccount = require('../firebase-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: 'jnn-laundry',
});

const db = admin.firestore();

const pricingData = [
    { service: 'Laundry Kiloan', price: 'Rp 8.000', unit: '/ kg' },
    { service: 'Laundry Express', price: 'Rp 12.000', unit: '/ kg' },
    { service: 'Laundry Satuan', price: 'Rp 15.000', unit: '/ pcs' },
    { service: 'Cuci Sepatu', price: 'Rp 30.000', unit: '/ pasang' },
    { service: 'Cuci Helm', price: 'Rp 30.000', unit: '/ pcs' },
    { service: 'Cuci Karpet', price: 'Rp 15.000', unit: '/ kg' },
    { service: 'Setrika & Lipat', price: 'Rp 6.000', unit: '/ kg' },
    { service: 'Treatment', price: 'Rp 15.000', unit: '/ pcs' },
    { service: 'Antar Jemput', price: 'Syarat & Ketentuan berlaku', unit: 'Area tertentu' },
];

async function initializeFirestore() {
    try {
        console.log('Initializing Firestore pricing data...');

        // Check if pricing collection already has data
        const snapshot = await db.collection('pricing').get();

        if (snapshot.empty) {
            // Add pricing data
            for (const item of pricingData) {
                await db.collection('pricing').add(item);
                console.log(`Added: ${item.service}`);
            }
            console.log('✅ Firestore initialized with pricing data!');
        } else {
            console.log('⚠️ Pricing data already exists in Firestore');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error initializing Firestore:', error);
        process.exit(1);
    }
}

initializeFirestore();
