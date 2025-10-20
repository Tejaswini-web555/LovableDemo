import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Shield, Calendar, Package, User, Hash } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    productName: "",
    serialNumber: "",
    customerName: "",
    purchaseDate: "",
    warrantyPeriod: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate blockchain hash generation
    const blockchainHash = `0x${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    
    toast({
      title: "Product Registered Successfully!",
      description: `Blockchain Hash: ${blockchainHash}`,
    });
    
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-gradient-primary mb-4">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Register Product</h1>
            <p className="text-muted-foreground">
              Create a blockchain-secured warranty for your product
            </p>
          </div>

          <Card className="p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="productName" className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Product Name
                </Label>
                <Input
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="e.g., iPhone 14 Pro"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serialNumber" className="flex items-center gap-2">
                  <Hash className="w-4 h-4" />
                  Serial Number
                </Label>
                <Input
                  id="serialNumber"
                  name="serialNumber"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  placeholder="e.g., SN123456789"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerName" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Customer Name
                </Label>
                <Input
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="e.g., John Doe"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="purchaseDate" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Purchase Date
                  </Label>
                  <Input
                    id="purchaseDate"
                    name="purchaseDate"
                    type="date"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="warrantyPeriod">
                    Warranty Period (Months)
                  </Label>
                  <Input
                    id="warrantyPeriod"
                    name="warrantyPeriod"
                    type="number"
                    min="1"
                    value={formData.warrantyPeriod}
                    onChange={handleChange}
                    placeholder="e.g., 12"
                    required
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <Button type="submit" size="lg" className="w-full shadow-glow">
                  Register & Generate Blockchain Hash
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Your warranty will be secured on the blockchain with a unique hash
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
