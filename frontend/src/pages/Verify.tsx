import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { QrCode, CheckCircle, XCircle, Shield } from "lucide-react";

const Verify = () => {
  const [warrantyId, setWarrantyId] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Simulate blockchain verification
    setTimeout(() => {
      // Mock verification result
      const isValid = warrantyId.startsWith("WR");
      
      if (isValid) {
        setVerificationResult({
          valid: true,
          productName: "iPhone 14 Pro",
          serialNumber: "SN123456789",
          purchaseDate: "2024-01-15",
          expiryDate: "2025-01-15",
          status: "Active",
          blockchainHash: "0x7f8a9bc3d2e1f456",
          customer: "John Doe"
        });
      } else {
        setVerificationResult({
          valid: false,
          message: "Warranty ID not found or invalid"
        });
      }
      
      setIsVerifying(false);
    }, 1500);
  };

  const resetVerification = () => {
    setVerificationResult(null);
    setWarrantyId("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-gradient-primary mb-4">
              <QrCode className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Verify Warranty</h1>
            <p className="text-muted-foreground">
              Instantly verify warranty authenticity using blockchain
            </p>
          </div>

          {!verificationResult ? (
            <Card className="p-8 shadow-card">
              <form onSubmit={handleVerify} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="warrantyId">
                    Warranty ID or QR Code
                  </Label>
                  <Input
                    id="warrantyId"
                    value={warrantyId}
                    onChange={(e) => setWarrantyId(e.target.value)}
                    placeholder="e.g., WR001 or scan QR code"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the warranty ID or scan the QR code from your warranty card
                  </p>
                </div>

                <div className="pt-4 space-y-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-glow"
                    disabled={isVerifying}
                  >
                    {isVerifying ? "Verifying on Blockchain..." : "Verify Warranty"}
                  </Button>
                  
                  <div className="text-center">
                    <Button type="button" variant="outline" size="sm">
                      <QrCode className="w-4 h-4 mr-2" />
                      Scan QR Code
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          ) : (
            <Card className="p-8 shadow-card">
              {verificationResult.valid ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Warranty Verified!</h2>
                    <Badge className="bg-green-500">Valid & Active</Badge>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Product</p>
                        <p className="font-semibold">{verificationResult.productName}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Serial Number</p>
                        <p className="font-semibold">{verificationResult.serialNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Customer</p>
                        <p className="font-semibold">{verificationResult.customer}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className="font-semibold">{verificationResult.status}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Purchase Date</p>
                        <p className="font-semibold">{verificationResult.purchaseDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expiry Date</p>
                        <p className="font-semibold">{verificationResult.expiryDate}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <Shield className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Blockchain Hash</span>
                      </div>
                      <code className="font-mono text-xs bg-muted px-3 py-2 rounded block">
                        {verificationResult.blockchainHash}
                      </code>
                    </div>
                  </div>

                  <Button onClick={resetVerification} variant="outline" className="w-full">
                    Verify Another Warranty
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-full bg-destructive/10 mb-4">
                      <XCircle className="w-12 h-12 text-destructive" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Verification Failed</h2>
                    <Badge variant="destructive">Invalid</Badge>
                  </div>

                  <p className="text-center text-muted-foreground">
                    {verificationResult.message}
                  </p>

                  <Button onClick={resetVerification} variant="outline" className="w-full">
                    Try Again
                  </Button>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;
