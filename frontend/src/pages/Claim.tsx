import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { FileText, AlertCircle } from "lucide-react";

const Claim = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    warrantyId: "",
    issueDescription: "",
    contactEmail: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Claim Submitted Successfully!",
      description: "Your warranty claim has been recorded on the blockchain. We'll contact you shortly.",
    });
    
    setFormData({
      warrantyId: "",
      issueDescription: "",
      contactEmail: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Claim Warranty</h1>
            <p className="text-muted-foreground">
              Submit a warranty claim for your registered product
            </p>
          </div>

          <Card className="p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="warrantyId">
                  Warranty ID
                </Label>
                <Input
                  id="warrantyId"
                  name="warrantyId"
                  value={formData.warrantyId}
                  onChange={handleChange}
                  placeholder="e.g., WR001"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Find this on your warranty dashboard or QR code
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="issueDescription">
                  Issue Description
                </Label>
                <Textarea
                  id="issueDescription"
                  name="issueDescription"
                  value={formData.issueDescription}
                  onChange={handleChange}
                  placeholder="Describe the issue with your product..."
                  rows={6}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail">
                  Contact Email
                </Label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <Card className="p-4 bg-accent/10 border-accent">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Blockchain Verification</p>
                    <p className="text-muted-foreground">
                      Your claim will be verified against the blockchain to ensure warranty validity. 
                      This process is instant and tamper-proof.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full shadow-glow">
                  Submit Warranty Claim
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Claim;
