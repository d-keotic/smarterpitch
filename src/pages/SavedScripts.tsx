import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Plus, 
  Eye, 
  Copy, 
  Trash2, 
  Download,
  Calendar,
  Target,
  Building
} from 'lucide-react';
import { toast } from 'sonner';

interface Script {
  id: string;
  title: string;
  product: string;
  persona: string;
  industry: string;
  goal: string;
  createdAt: string;
  lastModified: string;
}

export default function SavedScripts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [scripts] = useState<Script[]>([
    {
      id: '1',
      title: 'CRM Software - Sales Directors',
      product: 'Cloud-based CRM software',
      persona: 'Sales Directors at mid-size companies',
      industry: 'Technology',
      goal: 'Schedule a demo',
      createdAt: '2024-01-15',
      lastModified: '2024-01-15'
    },
    {
      id: '2',
      title: 'Marketing Automation - CMOs',
      product: 'Marketing automation platform',
      persona: 'Chief Marketing Officers',
      industry: 'E-commerce',
      goal: 'Book a discovery meeting',
      createdAt: '2024-01-12',
      lastModified: '2024-01-14'
    },
    {
      id: '3',
      title: 'HR Software - HR Directors',
      product: 'Employee management system',
      persona: 'HR Directors',
      industry: 'Healthcare',
      goal: 'Start a free trial',
      createdAt: '2024-01-10',
      lastModified: '2024-01-10'
    }
  ]);

  const filteredScripts = scripts.filter(script =>
    script.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    script.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    script.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (scriptId: string) => {
    toast.success('Script deleted successfully');
  };

  const handleCopy = (scriptId: string) => {
    toast.success('Script copied to clipboard');
  };

  const handleExport = (scriptId: string) => {
    toast.success('Script exported successfully');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Call Scripts
            </h1>
            <p className="text-gray-600">
              Manage and organize your generated call scripts
            </p>
          </div>
          
          <Link to="/wizard">
            <Button className="mt-4 sm:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Create New Script
            </Button>
          </Link>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search scripts by title, product, or industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-base"
              />
            </div>
          </CardContent>
        </Card>

        {/* Scripts Grid */}
        {filteredScripts.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {searchTerm ? 'No scripts found' : 'No scripts yet'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm 
                    ? 'Try adjusting your search terms to find what you\'re looking for.'
                    : 'Create your first call script to get started with SmartPitch.'
                  }
                </p>
                {!searchTerm && (
                  <Link to="/wizard">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Script
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScripts.map((script) => (
              <Card key={script.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 line-clamp-2">
                        {script.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {script.product}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2" />
                      {script.persona}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Building className="h-4 w-4 mr-2" />
                      {script.industry}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(script.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="mb-4">
                    <Badge variant="outline">{script.goal}</Badge>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Link to={`/script/${script.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </Link>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(script.id)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleExport(script.id)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(script.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Stats */}
        {filteredScripts.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {scripts.length}
                </div>
                <p className="text-gray-600">Total Scripts</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {new Set(scripts.map(s => s.industry)).size}
                </div>
                <p className="text-gray-600">Industries Covered</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {scripts.filter(s => {
                    const days = Math.floor((Date.now() - new Date(s.createdAt).getTime()) / (1000 * 60 * 60 * 24));
                    return days <= 7;
                  }).length}
                </div>
                <p className="text-gray-600">Created This Week</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}