tabs.push('INFTs');

// In tab content switch:
{activeTab === 'INFTs' && (
  <div>
    <h2>Intelligent NFTs</h2>
    <p>Tokenized winning AI strategies with royalties.</p>
    {/* Later: wagmi/viem read owned INFTs + display metadata */}
    <button className="px-6 py-3 bg-purple-600 rounded-lg">
      Mint New Strategy (Coming Soon)
    </button>
  </div>
)}