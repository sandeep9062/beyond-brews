import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit, 
  Save, 
  ArrowLeft, 
  CreditCard, 
  Package, 
  Settings, 
  LogOut,
  Bell,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Oak Street, Portland, OR 97205',
    bio: 'Coffee enthusiast and home brewer. Always on the hunt for new flavors and brewing techniques.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  });

  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData(formData);
    setIsEditing(false);
  };

  const orderHistory = [
    {
      id: 'ORD-2024-001',
      date: 'Jan 15, 2024',
      items: [
        { name: 'Ethiopian Yirgacheffe', quantity: 2 },
        { name: 'Colombian Supremo', quantity: 1 }
      ],
      total: 48.95,
      status: 'Delivered',
      trackingNumber: 'TRK-887654'
    },
    {
      id: 'ORD-2024-002',
      date: 'Feb 3, 2024',
      items: [
        { name: 'French Roast', quantity: 3 }
      ],
      total: 35.97,
      status: 'Delivered',
      trackingNumber: 'TRK-998765'
    },
    {
      id: 'ORD-2024-003',
      date: 'Feb 20, 2024',
      items: [
        { name: 'Costa Rican Tarrazu', quantity: 1 },
        { name: 'Brazilian Santos', quantity: 2 }
      ],
      total: 52.96,
      status: 'Processing',
      trackingNumber: 'TRK-109876'
    }
  ];

  const savedAddresses = [
    {
      id: '1',
      type: 'Home',
      name: 'Sarah Johnson',
      address: '123 Oak Street, Portland, OR 97205',
      phone: '+1 (555) 123-4567',
      default: true
    },
    {
      id: '2',
      type: 'Work',
      name: 'Sarah Johnson',
      address: '456 Pine Avenue, Portland, OR 97201',
      phone: '+1 (555) 123-4567',
      default: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-slate-600 hover:text-moss">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <Separator orientation="vertical" className="mx-4 h-4" />
            <span className="text-slate-500">My Profile</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <Avatar className="h-20 w-20 mb-4">
                      <AvatarImage src={userData.avatar} alt={userData.name} />
                      <AvatarFallback className="bg-moss text-white">
                        {userData.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-serif font-medium">{userData.name}</h2>
                    <p className="text-sm text-slate-500">{userData.email}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <User className="h-4 w-4" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <Package className="h-4 w-4" />
                      Orders
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <Heart className="h-4 w-4" />
                      Wishlist
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <Bell className="h-4 w-4" />
                      Notifications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <CreditCard className="h-4 w-4" />
                      Payment Methods
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <MapPin className="h-4 w-4" />
                      Addresses
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Button>
                    <Separator className="my-2" />
                    <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600">
                      <LogOut className="h-4 w-4" />
                      Log Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="profile">
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="addresses">Addresses</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile">
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Profile Information</CardTitle>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                        >
                          {isEditing ? (
                            <>
                              <Save className="h-4 w-4 mr-2" />
                              Save Changes
                            </>
                          ) : (
                            <>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Profile
                            </>
                          )}
                        </Button>
                      </div>
                      <CardDescription>
                        Manage your personal information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className={isEditing ? 'bg-white' : 'bg-slate-50'}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className={isEditing ? 'bg-white' : 'bg-slate-50'}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className={isEditing ? 'bg-white' : 'bg-slate-50'}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Input
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className={isEditing ? 'bg-white' : 'bg-slate-50'}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders">
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>
                        View and track your orders
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {orderHistory.map((order) => (
                          <div key={order.id} className="border border-slate-200 rounded-lg p-6">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">Order {order.id}</h3>
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    order.status === 'Delivered' 
                                      ? 'bg-green-100 text-green-800' 
                                      : order.status === 'Processing'
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {order.status}
                                  </span>
                                </div>
                                <p className="text-sm text-slate-500">{order.date}</p>
                              </div>
                              <div className="mt-2 md:mt-0">
                                <Button variant="ghost" size="sm">
                                  Track Order
                                </Button>
                              </div>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                  <span>{item.quantity}x {item.name}</span>
                                  <span className="text-slate-500">
                                    ${(item.quantity * 16.99).toFixed(2)}
                                  </span>
                                </div>
                              ))}
                            </div>
                            
                            <Separator className="my-4" />
                            
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Total</span>
                              <span className="font-medium">${order.total.toFixed(2)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Addresses Tab */}
                <TabsContent value="addresses">
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Addresses</CardTitle>
                        <Button size="sm">Add New Address</Button>
                      </div>
                      <CardDescription>
                        Manage your shipping and billing addresses
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {savedAddresses.map((address) => (
                          <div 
                            key={address.id} 
                            className={`border rounded-lg p-6 ${
                              address.default ? 'border-moss bg-moss/5' : 'border-slate-200'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="font-medium">{address.type}</h3>
                                {address.default && (
                                  <span className="text-xs text-moss bg-moss/10 px-2 py-1 rounded-full ml-2">
                                    Default
                                  </span>
                                )}
                              </div>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <p className="text-sm">{address.name}</p>
                            <p className="text-sm text-slate-500 mb-2">{address.address}</p>
                            <p className="text-sm text-slate-500">{address.phone}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings">
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>
                        Manage your account preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Email Notifications</h3>
                            <p className="text-sm text-slate-500">Receive updates about your orders and promotions</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Newsletter</h3>
                            <p className="text-sm text-slate-500">Subscribe to our monthly newsletter</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Change Password</h3>
                            <p className="text-sm text-slate-500">Update your account password</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            Change
                          </Button>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium text-red-500">Delete Account</h3>
                            <p className="text-sm text-slate-500">Permanently delete your account and data</p>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
   
    </div>
  );
};

export default Profile;