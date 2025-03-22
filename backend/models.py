from pydantic import BaseModel
from typing import List

class Tool(BaseModel):
    id: str
    name: str
    description: str
    longDescription: str
    features: List[str]
    pricing: str
    website: str
    icon: str
