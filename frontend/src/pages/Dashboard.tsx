import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Package, Calendar, Shield, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Mock warranty data
const warranties = [
  {
    id: "WR001",
    productName: "iPhone 14 Pro",
    serialNumber: "SN123456789",
    purchaseDate: "2024-01-15",
    expiryDate: "2025-01-15",
    status: "Active",
    blockchainHash: "0x7f8a9bc3d2e1f456"
  },
  {
    id: "WR002",
    productName: "MacBook Pro M2",
    serialNumber: "SN987654321",
    purchaseDate: "2023-06-20",
    expiryDate: "2024-06-20",
    status: "Expired",
    blockchainHash: "0x3e5c7b9a1d4f8621"
  },
  {
    id: "WR003",
    productName: "Samsung Galaxy S23",
    serialNumber: "SN456789123",
    purchaseDate: "2024-03-10",
    expiryDate: "2025-03-10",
    status: "Active",
    blockchainHash: "0x9a2b5c8d7e3f1456"
  }
];

const Dashboard = () => {
  const getStatusColor = (status: string) => {
    return status === "Active" ? "default" : "secondary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Warranty Dashboard</h1>
          <p className="text-muted-foreground">
            Manage and track all your blockchain-secured warranties
          </p>
        </div>

        {warranties.length === 0 ? (
          <Card className="p-12 text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No Warranties Yet</h3>
            <p className="text-muted-foreground mb-6">
              Start by registering your first product warranty
            </p>
            <Button asChild>
              <Link to="/register">Register Product</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6">
            {warranties.map((warranty) => (
              <Card key={warranty.id} className="p-6 hover:shadow-card transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-primary">
                        <Package className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{warranty.productName}</h3>
                          <Badge variant={getStatusColor(warranty.status)}>
                            {warranty.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Serial: {warranty.serialNumber} • ID: {warranty.id}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 ml-16">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Purchase:</span>
                        <span className="font-medium">{warranty.purchaseDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Expiry:</span>
                        <span className="font-medium">{warranty.expiryDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm md:col-span-2">
                        <Shield className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Blockchain:</span>
                        <code className="font-mono text-xs bg-muted px-2 py-1 rounded">
                          {warranty.blockchainHash}
                        </code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex lg:flex-col gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1 lg:flex-none">
                      <Link to="/verify">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify
                      </Link>
                    </Button>
                    {warranty.status === "Active" && (
                      <Button size="sm" asChild className="flex-1 lg:flex-none">
                        <Link to="/claim">Claim</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
