import { Link } from "react-router-dom";
import { Shield, Lock, QrCode, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-blockchain.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Blockchain-Powered Warranty System
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Secure Your Warranties with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Blockchain
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Never lose a warranty again. HashProof uses blockchain technology to create 
                tamper-proof digital warranties that can be instantly verified anywhere, anytime.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="shadow-glow">
                  <Link to="/register">Register Product</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/verify">Verify Warranty</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <img 
                src={heroImage} 
                alt="Blockchain Warranty System" 
                className="relative rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose HashProof?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Revolutionary blockchain technology meets practical warranty management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Tamper-Proof</h3>
              <p className="text-muted-foreground">
                Blockchain ensures your warranty records can never be altered or faked
              </p>
            </Card>
            
            <Card className="p-6 space-y-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Secure Storage</h3>
              <p className="text-muted-foreground">
                Your warranty data is encrypted and stored securely on the blockchain
              </p>
            </Card>
            
            <Card className="p-6 space-y-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">QR Verification</h3>
              <p className="text-muted-foreground">
                Instant warranty verification through QR codes at any service center
              </p>
            </Card>
            
            <Card className="p-6 space-y-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Easy Claims</h3>
              <p className="text-muted-foreground">
                Streamlined warranty claim process with instant validation
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden p-12 bg-gradient-primary">
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                Ready to Secure Your Warranties?
              </h2>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of users who trust HashProof for their warranty management
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/register">Register Your First Product</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Landing;
